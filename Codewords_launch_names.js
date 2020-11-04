/*
Sketch by k.donnachie for codeWords 2020
www.karenandy.com
Proudly publishing the work of students generated in codeWords Design Studio, 2020
Studio leads Andy Simionato & Karen ann Donnachie, RMIT University
*/
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
  students = ['About codeWords', 'Grid View', 'Yutang Mu', 'Roby Manlongat', 'Bridie O\'Toole', 'Ruby Brown', 'Taj Healy', 'Natasha Nathania', 'Jamie Tung', 'Fergus Arundel', 'Celia Mance', 'House of Leaves', 'Kristine Gudmundsen', 'Samantha Ng', 'Ziyun Yuan', 'Thomas Bellamy', 'Hamish Payne', 'Jackie Liu', 'Finn Arundel', 'Lai Unian', 'Napasorn Chotnoparatpat', 'Amy Ledger', 'Win(Siyang) Wen ', 'Tayla Rogic', 'Lauren Tan', 'Faye Chen', 'Peem Thaugsuban', 'Zhongrui Feng'];  
  links = ["http://digbeyond.com/codeWords/about.php", "http://digbeyond.com/codeWords/list.php", "https://yutangmoo.github.io/MakeCode/Week_12/Final_Project/", "https://robymanlongat.github.io/c0dewords/week12/majorProject_finalefinale/", "https://bridieotoole.github.io/codewords/week_12/LostInTime/", "https://rubybrown101.github.io/codewordsstudio/SKO1/week12/CLAIMED/", "https://tajhealy.github.io/CodeWords/week_12/theBay/", "https://natnathania.github.io/Codewords-2020/Week_12/Mirage/", "https://jamtt.github.io/Codewords/Week_12/StartofSomething/", "https://fergarundel.github.io/CODE-WORDS/week_12/cells_final/", "https://celiamance.github.io/codewords/SKO/WEEK12/splitScreen5/", "https://www.youtube.com/watch?v=uiOQQN-uh4c&list=PLUcOibqqi1kyBP6b0wt7EsPpsiJ-UzEaH", "https://kristinegudmundsen.github.io/CodeWords/SKO/Week_12/CodeWords1/", "https://samanthangsy.github.io/codewords/Final/EmbraceTheError/", "https://cielziyun.github.io/sketch_201013a/", "http://tommybellamy.github.io/CodeWords/week-12/SketchOct14", "https://hamishpayne.github.io/CODE-WORDS/Processing/NEOTOPIA", "https://jackieliiu.github.io/CODEWORDS/Week12/OSCILLATE_Final/", "https://finnarundel.github.io/codewordsRMIT/time_and_space/", "https://unianlai.github.io/codewode/Major%20project/", "https://napasornc.github.io/c0dew0rd/processing/MajorProjectFlocking17", "https://astlcreations.github.io/codewords-codes-words/p5.js%20Coding%20Files/Presentation/MainProject_FIREFLIESW12Presentation/", "https://wwsiyang.github.io/CODEWORD/SKO/Final_Assignment/Textparticle_151020_rain_1/", "https://taylarogic.github.io/codeWords/11/metahaven2/", "https://renpapers.github.io/codeword/Processing%20Sketches/AGalaxyofRealities/", "https://faye12.github.io/CodeWord/majorProject/MajorProject_Final/", "https://ptpeem.github.io/EdmCodeWorld/Week_12/GlitchSpeakGameLatest/", "https://raymondvonz.github.io/CodeWords/W11/final2/"];
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
    newArtist = new Artist(students[s], random(0, width-50), random(0, height-50), links[s]);
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = width/7;
  textAlign(CENTER,CENTER);
  points = font.textToPoints(
    word, 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });
  names=[];
  bounds = font.textBounds(word, 0, 0, size);
  for(s=0; s<students.length; s++){
    newArtist = new Artist(students[s], random(0, width-50), random(0, height-50), links[s]);
    names.push(newArtist);  
  }
  //runWords();
}

class Artist{
  constructor(name, posX, posY, link){
    this.name = name;
    this.x= posX;
    this.y= posY;
    this.link=link;
    this.ahref=createA(this.link, name, '_blank');
    //this.ahref.attribute('onclick', 'return confirm(\"Are you sure ?\")');
  }
  update() {
    rand=random(-3,3);
    if (width-50 > this.x+rand > 0){this.x +=rand;}
    rand=random(-3,3);
    if (height-14 > this.y+rand > 20){this.y +=rand;}
  }
  display() {
    this.ahref.position(this.x, this.y);
    if (this.name == 'Grid View' | this.name == 'About codeWords' | this.name == 'House of Leaves'){this.ahref.style('color', 'yellow');}
    else {
    this.ahref.style('color', 'white');}
    //this.ahref.mousePressed(goLink);
    //text (this.name, this.x, this.y);
  }
}
