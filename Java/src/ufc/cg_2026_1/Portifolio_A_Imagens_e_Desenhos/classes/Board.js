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
    this.#image.setPixel(x - 1, y - 1, color)
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

  clear() {
    this.#image.clear()
  }
}