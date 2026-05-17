
const CELL = 10;
const BOARD_SIZE = 600;
const BOARD = new Board(CELL, BOARD_SIZE);

function setup() {
  createCanvas(BOARD_SIZE, BOARD_SIZE);

  const board = new Board(CELL, BOARD_SIZE);

  const ddaLine = new Line(
    createVector(2, 2),
    createVector(44, 29),
    "#ff000060"
  );

  const bresenhamLine = new Line(
    createVector(2, 2),
    createVector(44, 29),
    "#00ff0060"
  );

  const horizontalLine = new Line(
    createVector(2, 50),
    createVector(50, 50),
    "#ee55ff60"
  );

  const verticalLine = new Line(
    createVector(2, 2),
    createVector(2, 40),
    "#22eefa60"
  );

  const rectangle = new Rectangle(
    createVector(25, 35),
    createVector(5, 45),
    "#e6ee0060"
  )

  const circle = new Circle(
    createVector(45, 10),
    6,
    "#548d72"
  )

  const bresenhamCircle = new Circle(
    createVector(30, 10),
    6,
    "#7855b9"
  )

  const ellipse = new Ellipse(
    createVector(15, 25),
    8,
    5,
    "#d46e6e"
  )

  const bresenhamEllipse = new Ellipse(
    createVector(40, 40),
    8,
    5,
    "#816ed4"
  )

  background(255);

  noStroke();
  
  ddaLine.drawDDALine(board);
  bresenhamLine.drawBresenhamLine(board);
  horizontalLine.draw(board);
  verticalLine.draw(board);
  rectangle.draw(board);
  circle.draw(board);
  bresenhamCircle.drawBresenhamCircle(board);
  ellipse.draw(board)
  bresenhamEllipse.drawBresenhamEllipse(board)
  
  board.drawGrid();
  board.render();
}
