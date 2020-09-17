
let bug; // Declare object
let newbug=[];
let i=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  newbug[i] = new Jitter();

}

function draw() {
  background(50, 89, 100);
  //bug.move();
  //newbug.display();
  for (i=0;i<20;i++){
    
    newbug[i].move();
    newbug[i].display();
  }
}
function mousePressed(){
  newbug[i]=new Jitter();
  newbug[i].x=mouseX;
  newbug[i].y=mouseY;
  newbug[i].display();
  i++;
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
