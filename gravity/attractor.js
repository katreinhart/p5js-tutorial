function Attractor(x, y) {
  this.pos = createVector(x, y);
  this.mass = 50;
  this.G = 1;

  this.display = function(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 50, 50);
  }

  this.calculateAttraction = function(p) {
    var force = p5.Vector.sub(this.pos, p.pos);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);

    force.normalize();
    var strength = (this.G * this.mass * p.mass) / (distance * distance)

    force.mult(strength);
    return force;
  }
}
