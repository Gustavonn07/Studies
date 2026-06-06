class Circle extends Shape {
  constructor(
    centerPoint,
    radius,
    color
  ) {
    super(color);

    this.centerX = centerPoint.x;
    this.centerY = centerPoint.y;
    this.radius = radius;
  }

  draw(board) {
    for(let alpha = 0; alpha < TWO_PI; alpha += 0.01) {
      const x = this.centerX + this.radius * cos(alpha);
      const y = this.centerY + this.radius * sin(alpha);

      board.drawPixel(
        Math.round(x),
        Math.round(y),
        this.color
      );
    }
  }

  #drawSymmetryPoints(
    board,
    x,
    y
  ) {
    const CENTER_X = this.centerX;
    const CENTER_Y = this.centerY;

    const POINTS = [
      [ CENTER_X + x, CENTER_Y + y ],
      [ CENTER_X - x, CENTER_Y + y ],
      [ CENTER_X + x, CENTER_Y - y ],
      [ CENTER_X - x, CENTER_Y - y ],

      [ CENTER_X + y, CENTER_Y + x ],
      [ CENTER_X - y, CENTER_Y + x ],
      [ CENTER_X + y, CENTER_Y - x ],
      [ CENTER_X - y, CENTER_Y - x ]
    ];

    for (const [POINT_X, POINT_Y] of POINTS) {

      board.drawPixel(
        POINT_X,
        POINT_Y,
        this.color
      );
    }
  }

  drawBresenhamCircle(board) {
    let x = 0;
    let y = this.radius;

    let decisionParameter = 1 - this.radius;

    while (x <= y) {
      this.#drawSymmetryPoints(board, x, y);

      if (decisionParameter < 0) {
        decisionParameter += (2 * x) + 3;

      } else {
        decisionParameter += (2 * x) - (2 * y) + 5;
        y--;
      }

      x++;
    }
  }
}