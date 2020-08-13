function preload (){
  font = loadFont('data/SourceSansProSemibold.otf');
}

function setup() {
createCanvas(600,600);
background(220);
fill (255);
textFont(font);
textAlign(CENTER);
}


function draw() {
  fill(0);
  textSize(32);
  text('hello Karen!',300,300);
  textSize(8);
  text ('tiny hello', 300, 100);

}
