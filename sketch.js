p5.disableFriendlyErrors = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function mousePressed() {}

function keyPressed() {
  if (key == "s") {
    save("test.jpg");
  }
}
///TEST
