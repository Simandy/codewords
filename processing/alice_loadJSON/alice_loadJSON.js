var data; // bucket for the notification data
//each social media notifications count is listed
//value ranges between 0-20 → circles -->map values?
var instagram, snapchat, messenger, facebook, email, instagramCol, snapchatCol, messengerCol, facebookCol, emailCol;
var whichHour=0; //for iterating through data
// this will make the circles bigger
var sizeMultiplier = 20; 
var time, size;
function preload (){
  data =loadJSON("data/Sunday.json");
}
function setup() {
   createCanvas (windowWidth, windowHeight);
   background (255);
   noStroke ();
   textSize (20);
   instagramCol = color (142, 68, 173);
   messengerCol = color (133, 193, 233);
   snapchatCol = color (247, 220, 111);
   facebookCol = color (118, 215, 196);
   emailCol = color (178, 186, 187); 
   frameRate(2);
   textAlign(CENTER,CENTER);
   }
function draw () {
  //background(255);
  //12:00 am data
  for (whichHour=0; whichHour<data.hours.length; whichHour++){
    fill (instagramCol);
    size = data.hours[whichHour].instagram*sizeMultiplier; 
    ellipse(20+(whichHour*50), height/4, size, size);
    fill(0);
    text(data.hours[whichHour].instagram, 20+(whichHour*50), height/4-50);
    
    fill (messengerCol);
    size = data.hours[whichHour].messenger*sizeMultiplier; 
    ellipse(20+(whichHour*50), height/2, size, size);
    fill(0);
    text(data.hours[whichHour].messenger, 20+(whichHour*50), height/2-50);
  }
}
