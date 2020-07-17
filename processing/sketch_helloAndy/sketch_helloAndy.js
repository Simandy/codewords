function setup() {
createCanvas (400,400);
}


function draw() {
//draw background square changes with mouse x/y
noStroke();
fill(mouseY/2,mouseY/2,mouseX/2);
rect (0,0,400,400);

//draw a circle, colour changes with mouse x/y
fill(mouseX,mouseY,255);
noStroke();
ellipse (200,200,400,400);

//next element = green
fill(0,255,0);

//next element = red line follows mouse
strokeWeight(10);
stroke(255,0,0);
line (mouseX,mouseY,pmouseX,pmouseY);

//next element = black Q line
stroke(0);
strokeWeight(20);
line (250,250,400,400);
}

function keyPressed() {
  saveFrames('Andy_screenshot','jpg',1,1);
}
