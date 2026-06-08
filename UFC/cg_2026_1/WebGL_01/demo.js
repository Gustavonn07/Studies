let gl = null

function main() {
  let canvas = document.getElementById("cid")

  initGl(canvas)
  initShaders()
  initBuffers()
  if (!gl) return

  setTimeout(draw, 0)
}

function initGl(canvas) {
  gl = canvas.getContext("experimental-webgl");
  gl.viewportWidth = canvas.widith;
  gl.viewportHeight = canvas.height;
}

let shaderProgram;
function initShaders() {
  let fragmentShader = getShader(gl, "shader-fs")
  let vertexShader = getShader(gl, "shader-vs")

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader)
  gl.attachShader(shaderProgram, fragmentShader)

  gl.linkProgram(shaderProgram)

  gl.useProgram(shaderProgram)
}