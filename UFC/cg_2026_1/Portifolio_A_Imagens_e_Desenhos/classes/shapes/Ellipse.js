class Ellipse extends Shape {
  constructor(
    centerPoint,
    radiusX,
    radiusY,
    color
  ) {
    super(color)

    this.centerX = centerPoint.x
    this.centerY = centerPoint.y
    this.radiusX = radiusX
    this.radiusY = radiusY
  }

  draw(board) {
    for (let alpha = 0; alpha < TWO_PI; alpha += 0.01) {
      const x = this.centerX + this.radiusX * cos(alpha);
      const y = this.centerY + this.radiusY * sin(alpha);

      board.drawPixel(
        Math.round(x),
        Math.round(y),
        this.color
      );
    }
  }

  #drawSymmetryPoints(board, x, y) {
    const CENTER_X = this.centerX;
    const CENTER_Y = this.centerY;

    const points = [
      [ CENTER_X + x, CENTER_Y + y ],
      [ CENTER_X - x, CENTER_Y + y ],

      [ CENTER_X + x, CENTER_Y - y ],
      [ CENTER_X - x, CENTER_Y - y ]
    ];

    for (const [POINT_X, POINT_Y] of points) {
      board.drawPixel(POINT_X, POINT_Y, this.color);
    }
  }

  drawBresenhamEllipse(board) {
    const RADIUS_X = this.radiusX
    const RADIUS_Y = this.radiusY

    const RADIUS_X_2 = RADIUS_X * RADIUS_X
    const RADIUS_Y_2 = RADIUS_Y * RADIUS_Y

    let x = 0
    let y = RADIUS_Y

    let dx = 2 * RADIUS_Y_2 * x
    let dy = 2 * RADIUS_X_2 * y

    let p1 = RADIUS_Y_2 - (RADIUS_X_2 * RADIUS_Y) + (0.25 * RADIUS_X_2);

    while (dx < dy) {
      this.#drawSymmetryPoints(board, x, y);

      x++;
      dx += 2 * RADIUS_Y_2;

      if (p1 < 0) {
        p1 += RADIUS_Y_2 + dx;

      } else {
        y--;
        dy -= 2 * RADIUS_X_2;

        p1 += RADIUS_Y_2 + dx - dy;
      }
    }

    let p2 = (RADIUS_Y_2 * ((x + 0.5) * (x + 0.5))) + (RADIUS_X_2 * ((y - 1) * (y - 1))) - (RADIUS_X_2 * RADIUS_Y_2);

    while (y >= 0) {
      this.#drawSymmetryPoints( board, x, y);

      y--;
      dy -= 2 * RADIUS_X_2;

      if (p2 > 0) {
        p2 += RADIUS_X_2 - dy;

      } else {
        x++;
        dx += 2 * RADIUS_Y_2;

        p2 += RADIUS_X_2 - dy + dx;
      }
    }
  }
}