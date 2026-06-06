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
    const targetColor =
      this.#image.getPixelColor(startX, startY);

    if (targetColor === fillColor) {
      return;
    }

    const visited = new Set();

    const pixelStack = [
      { x: startX, y: startY }
    ];

    while (pixelStack.length > 0) {
      const currentPixel = pixelStack.pop();

      const key =
        `${currentPixel.x},${currentPixel.y}`;

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

  clear() {
    this.#image.clear()
  }
}


// MARK: - TENTATIVA 01
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

// MARK: - TENTATIVA 02
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
