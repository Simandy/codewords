function setup() {
createCanvas (500,500);
background (255,0,0);
stroke(0); //the colour of the stroke
strokeWeight(5); //the line thickness
//line (100,100,400,400);
}


function draw() {
 
 strokeWeight(1);
 fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
 //fill(255,0,0,5); //rectangle with alpha transparency
 //rect (0,0,500,500); //rect(x1,y1,width, height)
 fill ((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
 ellipse (250,250,300,400); //(centre x, centre y, width, height)
 fill(0);
 ellipse (250,250,190,310);
 noFill();
 triangle(250,250,mouseX,mouseY,pmouseX,pmouseY); //(x1,y1,x2,y2,x3,y3)
}
function keyPressed (){
  fill(255,0,0);
  rect(0,0,500,500);
}
