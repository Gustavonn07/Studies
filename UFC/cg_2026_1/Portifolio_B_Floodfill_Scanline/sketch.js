
const CELL = 10;
const BOARD_SIZE = 600;
const BOARD = new Board(CELL, BOARD_SIZE);

function setup() {
  createCanvas(BOARD_SIZE, BOARD_SIZE);

  const board = new Board(CELL, BOARD_SIZE);

  const rectangle = new Rectangle(
    createVector(5, 45),
    createVector(25, 35),
    "#3b40ee60"
  );

  const circle = new Circle(
    createVector(45, 10),
    6,
    "#548d72"
  )

  background(255);

  noStroke();
  
  rectangle.draw(board);
  circle.draw(board)

  board.floodfill(
    5,
    35,
    'red'
  )
  board.floodfill(
    45,
    10,
    'blue'
  )
  
  board.drawGrid();
  board.render();
}
