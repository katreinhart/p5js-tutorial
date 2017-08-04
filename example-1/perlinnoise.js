var xoff = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  // var x = 320;
  // var x = random(640);
  var x = noise(xoff+=0.01) * width;

  fill(255);
  ellipse(x, 180, 48, 48)

}
