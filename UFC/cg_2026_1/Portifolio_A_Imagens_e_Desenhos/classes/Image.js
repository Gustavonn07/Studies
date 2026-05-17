class BoardImage {
  constructor(width, height) {
    this.width = width
    this.height = height

    this.pixels = []
  }

  setPixel(x, y, color) {
    this.pixels.push({ x, y, color })
  }

  clear() {
    this.pixels = []
  }

  getPixels() {
    return this.pixels
  }
}