//Dynamic example of P5js Text-to-point function by k.donnachie
//remix from https://p5js.org/reference/#/p5.Font/textToPoints
//For CODEWORDS, September 2020

var font;
var points;
var bounds, word, size;

function preload() {
  font = loadFont('data/HelveticaNowDisplay.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  word = 'CodeWords';
  size = 200;
  points = font.textToPoints(
    word, 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(word, 0, 0, size);
   cursor(CROSS);
   fill(255, 127);
   noStroke();
}

function draw() {
  background(0);  
  stroke(51);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  //noStroke();
  var centerDist = dist(mouseX, mouseY, width / 2, height / 2);
  var transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  fill(255, transparency);
  //from P5js Text-to-point example
  var jiggle = map(centerDist, 0, width, 1, 300);

  translate((width - abs(bounds.w)) / 2, 
            (height + abs(bounds.h)) / 2);
  
//   FOR DEBUGGING ONLY 
//   stroke(255, 0, 0);
//   rect(bounds.x, bounds.y, bounds.w, bounds.h);
  
//   console.log("x: " + bounds.x 
//               + ", y: " + bounds.y
//               + ", w: " + bounds.w
//               + ", h: " + bounds.h);
  
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    stroke(255);
    line(p.x + jiggle * randomGaussian(), p.y + jiggle * randomGaussian(), p.x, p.y );
  }

  //noLoop();
}
