var w;

function setup() {
  createCanvas(640, 360);
  w = new Walker();
}

function draw() {
  background(51);
  w.display();
  w.update();

}

function Walker() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    //
    // this.acc.normalize();
    // this.acc.mult(0.1);

    this.acc.rotate(noise(TWO_PI));

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
