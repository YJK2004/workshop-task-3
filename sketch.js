let imgs = [];
let group, group2, group3, group4, subject, subject2;
let bg;
let showText = true;

function preload() {
  bg = loadImage('images/train_bg.jpg');
  
  group = loadImage('images/group.jpg');
  group2 = loadImage('images/group2.jpg');
  group3 = loadImage('images/group3.jpg');
  group4 = loadImage('images/group4.jpg');
  subject = loadImage('images/subject.jpg');
  subject2 = loadImage('images/subject2.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  imgs.push(group);
  imgs.push(group2);
  imgs.push(group3);
  imgs.push(group4);
  imgs.push(subject);
  imgs.push(subject2);

  imageMode(CENTER);

}

function draw() {

  textSize(100);
  fill(255)
  textAlign(CENTER, CENTER);
  if(showText){
    text('click to start', windowWidth/2, windowHeight/2);
    
  }

}

function mouseClicked(){
  
  image(bg, windowWidth/2, windowHeight/2 , windowWidth, windowHeight);
  tint(GRAY);

  
  fill(0)
  textAlign(CENTER, TOP);
  textSize(30);
  text('hold your mouse to see the image',windowWidth/2, windowHeight/5);

}

function mousePressed(){

  showText = false

  let r = random(imgs);

  group.resize(windowWidth, windowHeight-260);
  group2.resize( windowWidth-100, windowHeight-260);
  group3.resize(windowWidth/2, windowHeight-260);
  group4.resize(windowWidth, windowHeight+200);
  subject.resize(windowWidth/3, windowHeight-260);
  subject2.resize(windowWidth-300, windowHeight);

  image(r, windowWidth/2, windowHeight-200);


}
