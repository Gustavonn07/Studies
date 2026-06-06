class BoardImage {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.pixels = [];
  }

  getPixel(x, y) {
    return this.pixels.find(
      pixel =>
        pixel.x === x &&
        pixel.y === y
    );
  }

  getPixelColor(x, y) {
    const pixel =
      this.getPixel(x, y);

    return pixel
      ? pixel.color
      : null;
  }

  setPixel(x, y, color) {
    const pixel =
      this.getPixel(x, y);

    if (pixel) {
      pixel.color = color;
      return;
    }

    this.pixels.push({
      x,
      y,
      color
    });
  }

  addPixel(x, y, color) {
    this.pixels.push({
      x,
      y,
      color
    });
  }

  clear() {
    this.pixels = [];
  }

  getPixels() {
    return this.pixels;
  }
}