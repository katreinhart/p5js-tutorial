var particle1, particle2;

function setup() {
  createCanvas(640, 320);
  particle1 = new Particle(200, 100, 1);
  particle2 = new Particle(400, 100, 2);
}

function draw() {
  background(51);

  var gravity1 = createVector(0, 0.2 * particle1.mass);
  var gravity2 = createVector(0, 0.2 * particle2.mass);
  var wind = createVector(0.1, 0);

  particle1.applyForce(gravity1);
  particle2.applyForce(gravity2);

  if(mouseIsPressed){
    particle1.applyForce(wind);
    particle2.applyForce(wind);
  }

  particle1.edges();
  particle1.update();
  particle1.display();

  particle2.edges();
  particle2.update();
  particle2.display()
}
