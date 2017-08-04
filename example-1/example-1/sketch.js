var w;

function setup() {
  createCanvas(640, 360);

  w = new Walker();
}

function draw() {
  background(51);

  w.update();
  w.draw();
}

var Walker = function() {
  this.pos = createVector(width/2, height/2);
  this.xoff = 0;

  this.vel = createVector(0, 0);

  this.update = function() {
    this.acc = createVector(0.1, 0.01);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.xoff+=0.1;
  }

  this.draw = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
