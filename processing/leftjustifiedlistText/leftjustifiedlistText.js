/*
A simple sketch to show the reveal of words over time.
uses the words.split(' ') function to break up a sentence
by k.donnachie for codeWords, 2020
*/
var myText = 'And yet this naked body of \"quotemarks\" words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';
var words, yplay;
function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (32); 
textFont ('Times');
words=myText.split(' ');
}
//to have this 'appear over time' you can use the ongoing variable 'frameCount'
function draw() {
  background (0,100);
  fill(255);
  for (i=0; i<words.length; i++){
    if (frameCount>100*i){
      //if (mouseX<200){
      //  yplay = int(random(-5,5));}
      //  else {yplay=1;}
      text(words[i], 1*20, i*30, width, height); //(x,y, length of x, length of y)
    }
  }
}
