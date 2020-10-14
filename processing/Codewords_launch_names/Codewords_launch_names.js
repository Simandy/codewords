let font;
let points, rand, newArtist;
let bounds, word, size;
let students=[];
let names=[];
function preload() {
  font = loadFont("data/HelveticaNowDisplay.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  students = ["Fergus Arundel", "Thomas Bellamy", "Peem Thaugsuban", "Finn Arundel", "Bridie O\'Toole", "Kristine Gudmundsen", "Tayla Rogic", "Hamish Payne", "Jamie Tung", "Natasha Nathania", "Yutang Mu", "Un ian Lai", "Ziyun Yuan", "Amy Ledger", "Roby Manlongat", "Celia Mance", "Ruby Brown", "Jackie  Liu", "Taj Healy", "Zhongrui FENG", "Faye (Feitong) Chen", "Win(Siyang) Wen", "Samantha Ng", "Millie Corbett", "Na (Napasorn) Chotnoparatpat", "Lauren Tan" ];
  word = "CodeWords";
  size = width/7;
  textAlign(CENTER,CENTER);
  points = font.textToPoints(
    word, 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(word, 0, 0, size);
  for(s=0; s<students.length; s++){
    newArtist = new Artist(students[s], random(0, width-50), random(0, height-50));
    names.push(newArtist);
    
  }
  cursor(CROSS);
  fill(255, 127);
  noStroke();
}

function draw() {
  background(0);
  stroke(51);
  //line(width / 2, 0, width / 2, height);
  //line(0, height / 2, width, height / 2);
  push();
  textSize(width/20);
  textFont(font);
  textAlign(CENTER,CENTER);
  fill(255);
  noStroke();
  //text("SHOWCASE LAUNCH 15 OCTOBER 2020", width/2, 4*height/5);
  pop();
  //noStroke();
  
  let centerDist = dist(mouseX, mouseY, width / 2, height / 2);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  fill(255, transparency);
  
  let jiggle = map(centerDist, 0, width, 1, 300);
  push();
  translate((width - abs(bounds.w)) / 2, (height + abs(bounds.h)) / 2);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    stroke(255, transparency);  
    line(p.x + jiggle * randomGaussian(), p.y + jiggle * randomGaussian(), p.x, p.y );
  }
  pop();
  fill(255);
  noStroke();
  for (let s=0; s<students.length; s++){
    names[s].update();
    names[s].display();
    
  } 
  //noLoop();
}

function linkOut(){
  console.log('this student\'s link: '+names[s]);
}

class Artist{
  constructor(name, posX, posY){
  this.name = name;
  this.x= posX;
  this.y= posY;
  }
  update() {
    rand=random(-3,3);
    if (width-50 > this.x+rand > 0){this.x +=rand;}
    rand=random(-3,3);
    if (height-14 > this.y+rand > 0){this.y +=rand;}
  }
  display() {
    text (this.name, this.x, this.y);
  }
}
