class Board {
  #image

  constructor(
    cellSize = 20,
    boardSize = 100
  ) {
    this.cellSize = cellSize
    this.boardSize = boardSize

    this.#image = new BoardImage(boardSize, boardSize)
  }

  drawGrid() {
    stroke(220)

    for (let x = 0; x <= this.boardSize; x += this.cellSize) {
      line(x, 0, x, this.boardSize)
    }

    for (let y = 0; y <= this.boardSize; y += this.cellSize) {
      line(0, y, this.boardSize, y)
    }

    noStroke()
  }

  drawPixel(x, y, color) {
    this.#image.addPixel(x - 1, y - 1, color)
  }

  render() {
    const pixels = this.#image.getPixels()

    for (const pixel of pixels) {
      fill(pixel.color)

      rect(
        pixel.x * this.cellSize,
        pixel.y * this.cellSize,
        this.cellSize,
        this.cellSize
      )
    }
  }

  // MARK: - FLOOD_FILL
  floodfill(startX, startY, fillColor) {
    const targetColor = this.#image.getPixelColor(startX, startY);

    if (targetColor === fillColor) {
      return;
    }

    const visited = new Set();

    const pixelStack = [
      { x: startX, y: startY }
    ];

    while (pixelStack.length > 0) {
      const currentPixel = pixelStack.pop();

      const key = `${currentPixel.x},${currentPixel.y}`;

      if (visited.has(key)) {
        continue;
      }

      visited.add(key);

      if (
        currentPixel.x < 0 ||
        currentPixel.x >= this.#image.width ||
        currentPixel.y < 0 ||
        currentPixel.y >= this.#image.height
      ) {
        continue;
      }

      const currentColor =
        this.#image.getPixelColor(
          currentPixel.x,
          currentPixel.y
        );

      if (currentColor !== targetColor) {
        continue;
      }

      this.#image.setPixel(
        currentPixel.x,
        currentPixel.y,
        fillColor
      );

      const neighbors = [
        { x: currentPixel.x + 1, y: currentPixel.y },
        { x: currentPixel.x - 1, y: currentPixel.y },
        { x: currentPixel.x, y: currentPixel.y + 1 },
        { x: currentPixel.x, y: currentPixel.y - 1 }
      ];

      for (const neighbor of neighbors) {
        const neighborKey =
          `${neighbor.x},${neighbor.y}`;

        if (!visited.has(neighborKey)) {
          pixelStack.push(neighbor);
        }
      }
    }
  }

  // MARK: - SCANLINE_FILL
  scanlineFill(points, fillColor) {
    const minY = Math.min(
      ...points.map(point => point.y)
    );

    const maxY = Math.max(
      ...points.map(point => point.y)
    );

    for (let y = minY; y <= maxY; y++) {
      const intersections = [];

      for (let i = 0; i < points.length; i++) {
        const currentPoint = points[i];

        const nextPoint = points[(i + 1) % points.length];

        if (y >= Math.min(currentPoint.y, nextPoint.y) && y < Math.max(currentPoint.y, nextPoint.y)) {
          const x = currentPoint.x + ((y - currentPoint.y) * (nextPoint.x - currentPoint.x)) / (nextPoint.y - currentPoint.y);

          intersections.push(x);
        }
      }

      intersections.sort((a, b) => a - b);

      for (let i = 0; i < intersections.length; i += 2) {
        const startX = Math.ceil(intersections[i]);

        const endX = Math.floor(intersections[i + 1]);

        for (let x = startX; x <= endX; x++) {
          this.#image.setPixel(
            x-1,
            y-1,
            fillColor
          );
        }
      }
    }
  }

  clear() {
    this.#image.clear()
  }
}

// MARK: - TENTATIVA 01 FF
// POR ALGUM MOTIVO ELE CRASHA O PROJETO
// floodfill(startX, startY, fillColor) {
  //   const targetColor = this.#image.getPixelColor(startX, startY);

  //   if (targetColor === fillColor) {
  //     return;
  //   }

  //   const visited = new Set();

  //   const pixelStack = [
  //     { x: startX, y: startY }
  //   ];

  //   while (pixelStack.length > 0) {
  //     const currentPixel = pixelStack.pop();

  //     const key = `${currentPixel.x},${currentPixel.y}`;

  //     if (visited.has(key)) {
  //       continue;
  //     }

  //     visited.add(key);

  //     if (
  //       currentPixel.x < 0 ||
  //       currentPixel.x >= this.#image.width ||
  //       currentPixel.y < 0 ||
  //       currentPixel.y >= this.#image.height
  //     ) {
  //       continue;
  //     }

  //     const currentColor =
  //       this.#image.getPixelColor(
  //         currentPixel.x,
  //         currentPixel.y
  //       );

  //     if (currentColor !== targetColor) {
  //       continue;
  //     }

  //     this.#image.setPixel(
  //       currentPixel.x,
  //       currentPixel.y,
  //       fillColor
  //     );

  //     pixelStack.push({
  //       x: currentPixel.x + 1,
  //       y: currentPixel.y
  //     });

  //     pixelStack.push({
  //       x: currentPixel.x - 1,
  //       y: currentPixel.y
  //     });

  //     pixelStack.push({
  //       x: currentPixel.x,
  //       y: currentPixel.y + 1
  //     });

  //     pixelStack.push({
  //       x: currentPixel.x,
  //       y: currentPixel.y - 1
  //     });
  //   }
// }

// MARK: - TENTATIVA 02 FF
// CAMINHADA LINEAR NÃO FLOODFILL
// floodfill(startX, startY, fillColor) {
  //   const targetColor =
  //     this.#image.getPixelColor(startX, startY);

  //   if (targetColor === fillColor) {
  //     return;
  //   }

  //   const visited = new Set();

  //   const pixelStack = [
  //     { x: startX, y: startY }
  //   ];

  //   let count = 0;

  //   while (pixelStack.length > 0) {
  //     count++;

  //     const currentPixel = pixelStack.pop();

  //     const key =
  //       `${currentPixel.x},${currentPixel.y}`;

  //     if (visited.has(key)) {
  //       continue;
  //     }

  //     visited.add(key);

  //     if (
  //       currentPixel.x < 0 ||
  //       currentPixel.x >= this.#image.width ||
  //       currentPixel.y < 0 ||
  //       currentPixel.y >= this.#image.height
  //     ) {
  //       continue;
  //     }

  //     const currentColor =
  //       this.#image.getPixelColor(
  //         currentPixel.x,
  //         currentPixel.y
  //       );

  //     if (currentColor !== targetColor) {
  //       continue;
  //     }

  //     this.#image.setPixel(
  //       currentPixel.x,
  //       currentPixel.y,
  //       fillColor
  //     );

  //     pixelStack.push({
  //       x: currentPixel.x + 1,
  //       y: currentPixel.y
  //     });
  //   }
// }

  // MARK: - TENTATIVA 01 SF
  // NÃO IA ATÉ O FIM E SEMPRE PULAVA UM VALOR
// scanlineFill(points, fillColor) {
  //   const minY = Math.min(
  //     ...points.map(point => point.y)
  //   );

  //   const maxY = Math.max(
  //     ...points.map(point => point.y)
  //   );

  //   for (let y = minY; y <= maxY; y++) {
  //     const intersections = [];

  //     for (let i = 0; i < points.length; i++) {
  //       const currentPoint = points[i];

  //       const nextPoint = points[(i + 1) % points.length];

  //       if (y >= Math.min(currentPoint.y, nextPoint.y) && y < Math.max(currentPoint.y, nextPoint.y)) {
  //         const x = currentPoint.x + ((y - currentPoint.y) * (nextPoint.x - currentPoint.x)) / (nextPoint.y - currentPoint.y);

  //         intersections.push(x);
  //       }
  //     }

  //     for (let i = 0; i < intersections.length; i += 2) {
  //       const startX = Math.ceil(intersections[i]);

  //       const endX = Math.floor(intersections[i + 1]);

  //       for (let x = startX; x <= endX; x++) {
  //         this.#image.setPixel(
  //           x,
  //           y,
  //           fillColor
  //         );
  //       }
  //     }
  //   }
// }
