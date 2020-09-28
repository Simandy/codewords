/*
A simple sketch about Letterspace
by k.donnachie for CodeWords, 2020
Can be also be mapped to mouse position or scroll... or... (rather than the slider)
Can also be used for writing text letter by letter, 
by introducing a frameCount check before the text() line (29 in this original)
uses p5js textWidth() 
*/

var f, kerning, x, slider, font;
var message = [];
function preload() {
  font = loadFont('data/HelveticaNowDisplay.otf');   // this file must exist
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font,20,true);
  kerning=1.6;
  message='To Each character it\'s own space.';
  x=20;
  slider = createSlider(0.0, 3.0, 0.1, 0);
  slider.position(15, 10);
  slider.style('width', '100px');
}
function draw() { 
  background(255);
  fill(0);
  kerning = slider.value();
  x = 20;
  textSize(14);
  text('Letterspace: '+ nf(kerning, 1, 2), 20, 50);
  for (var i = 0; i < message.length; i++) {
    textSize(24);
    text(message[i],x,height/2);
    x += int(textWidth(message[i])*kerning); 
  }
}
