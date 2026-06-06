class Polygon extends Shape {
  constructor(points, color) {
    super(color);

    this.points = points;
  }

  draw(board) {
    for (let i = 0; i < this.points.length; i++) {
      const currentPoint = this.points[i];

      const nextPoint =this.points[(i + 1) % this.points.length];

      const line = new Line(
        currentPoint,
        nextPoint,
        this.color
      );

      line.drawBresenhamLine(board);
    }
  }
}