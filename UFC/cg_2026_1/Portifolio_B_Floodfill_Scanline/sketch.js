
const CELL = 10;
const BOARD_SIZE = 600;
const BOARD = new Board(CELL, BOARD_SIZE);

function setup() {
  const POLYGON_POINTS = [
    createVector(25, 5),
    createVector(30, 18),
    createVector(45, 18),
    createVector(33, 28),
    createVector(38, 42),
    createVector(25, 34),
    createVector(12, 42),
    createVector(17, 28),
    createVector(5, 18),
    createVector(20, 18)
  ];

  createCanvas(BOARD_SIZE, BOARD_SIZE);

  const board = new Board(CELL, BOARD_SIZE);

  const rectangle = new Rectangle(
    createVector(5, 55),
    createVector(25, 45),
    "#3b40ee60"
  );

  const circle = new Circle(
    createVector(45, 10),
    6,
    "#548d72"
  )

  const polygon = new Polygon(
    POLYGON_POINTS,
    "#00000060"
  );

  background(255);

  noStroke();
  
  rectangle.draw(board);
  circle.draw(board);
  polygon.draw(board);

  board.scanlineFill(POLYGON_POINTS, 'green');
  board.floodfill(
    5,
    45,
    'red'
  );
  board.floodfill(
    45,
    10,
    'blue'
  );
  
  board.drawGrid();
  board.render();
}
