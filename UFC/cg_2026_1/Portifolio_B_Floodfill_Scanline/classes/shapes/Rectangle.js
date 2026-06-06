class Rectangle extends Shape {
  constructor(
    point1,
    point2,
    color
  ) {
    super(color)

    this.point1 = point1
    this.point2 = point2
  }

  draw(board) {
    const x1 = this.point1.x
    const y1 = this.point1.y

    const x2 = this.point2.x
    const y2 = this.point2.y

    const TOP_LEFT_CORNER = createVector(x1, y1)
    const TOP_RIGHT_CORNER = createVector(x2, y1)
    const BOTTOM_LEFT_CORNER = createVector(x1, y2)
    const BOTTOM_RIGHT_CORNER = createVector(x2, y2)

    const topLine = new Line(
      TOP_LEFT_CORNER,
      TOP_RIGHT_CORNER,
      this.color
    )

    const rightLine = new Line(
      TOP_RIGHT_CORNER,
      BOTTOM_RIGHT_CORNER,
      this.color
    )

    const bottomLine = new Line(
      BOTTOM_LEFT_CORNER,
      BOTTOM_RIGHT_CORNER,
      this.color
    )

    const leftLine = new Line(
      TOP_LEFT_CORNER,
      BOTTOM_LEFT_CORNER,
      this.color
    )

    topLine.drawBresenhamLine(board)
    rightLine.drawBresenhamLine(board)
    bottomLine.drawBresenhamLine(board)
    leftLine.drawBresenhamLine(board)
  }
}