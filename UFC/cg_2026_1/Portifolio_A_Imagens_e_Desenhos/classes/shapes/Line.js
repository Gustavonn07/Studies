class Line extends Shape {
  constructor(
    point1,
    point2,
    color
  ) {
    super(color),
    this.point1 = point1,
    this.point2 = point2
  }

  #getValues() {
    let x1 = this.point1.x;
    let x2 = this.point2.x;

    let y1 = this.point1.y;
    let y2 = this.point2.y;

    let differenceX = x2 - x1;
    let differenceY = y2 - y1;

    let deltaX = Math.abs(differenceX);
    let deltaY = Math.abs(differenceY);

    let stepX = x1 < x2 ? 1 : -1;
    let stepY = y1 < y2 ? 1 : -1;

    return {
      differenceX,
      differenceY,
      deltaX,
      deltaY,
      x1,
      x2,
      y1,
      y2,
      stepX,
      stepY
    };
  }

  draw(board) {
    const {
      x1,
      x2,
      y1,
      y2,
      stepX
    } = this.#getValues();

    if (x1 === x2) {
      const stepY = y1 < y2 ? 1 : -1;

      for (
        let y = y1;
        y !== y2 + stepY;
        y += stepY
      ) {
        board.drawPixel(
          x1,
          y,
          this.color
        );
      }

      return;
    }

    const SLOPE = (y2 - y1) / (x2 - x1);

    let y = y1;

    for (
      let x = x1;
      x !== x2 + stepX;
      x += stepX
    ) {
      board.drawPixel(
        Math.round(x),
        Math.round(y),
        this.color
      );

      y += SLOPE * stepX;
    }
  }

  drawDDALine(board) {
    const {
      differenceX,
      differenceY,
      deltaX,
      deltaY,
      x1,
      y1
    } = this.#getValues();

    const step = Math.max(deltaX, deltaY);

    const xInc = differenceX / step;
    const yInc = differenceY / step;

    let x = x1;
    let y = y1;

    for (let i = 0; i <= step; i++) {
      board.drawPixel(
        Math.round(x),
        Math.round(y),
        this.color
      )

      x += xInc;
      y += yInc;
    }
  }

  drawBresenhamLine(board) {
    const {
      deltaX,
      deltaY,
      x1,
      y1,
      x2,
      y2,
      stepX,
      stepY
    } = this.#getValues();

    let currentX = x1;
    let currentY = y1;

    const isHorizontalDominant =
      deltaX > deltaY;

    let decisionParameter =
      isHorizontalDominant
        ? (2 * deltaY) - deltaX
        : (2 * deltaX) - deltaY;

    board.drawPixel(
      currentX,
      currentY,
      this.color
    );

    if (isHorizontalDominant) {
      while (currentX !== x2) {

        if (decisionParameter < 0) {

          currentX += stepX;

          decisionParameter +=
            2 * deltaY;

        } else {

          currentX += stepX;
          currentY += stepY;

          decisionParameter +=
            (2 * deltaY) -
            (2 * deltaX);
        }

        board.drawPixel(
          currentX,
          currentY,
          this.color
        );
      }

    } else {
      while (currentY !== y2) {

        if (decisionParameter < 0) {

          currentY += stepY;

          decisionParameter +=
            2 * deltaX;

        } else {

          currentX += stepX;
          currentY += stepY;

          decisionParameter +=
            (2 * deltaX) -
            (2 * deltaY);
        }

        board.drawPixel(
          currentX,
          currentY,
          this.color
        );
      }
    }
  }
}