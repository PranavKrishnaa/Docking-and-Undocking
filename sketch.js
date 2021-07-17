var iss,iss_Img,spaceCraft,spaceCraft_Img;
var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  iss_Img = loadImage("iss.png");
  leftJet = loadImage("spacecraft3.png");
  rightJet = loadImage("spacecraft4.png");
  bothJet = loadImage("spacecraft2.png");
  noJet = loadImage("spacecraft1.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(350, 130, 50, 50);
  iss.addImage(iss_Img);
  iss.scale = 0.5
  spaceCraft = createSprite();
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spaceCraft.x = Math.round(random(50,750));
    spaceCraft.y = 300;
    
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(leftJet);
      spaceCraft.x  = spaceCraft.x - 5
     }
    
     if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(rightJet);
      spaceCraft.x  = spaceCraft.x + 5
     }
     
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(noJet);
      spaceCraft.y  = spaceCraft.y + 5
     }
    
    if(keyDown(UP_ARROW)){
      spaceCraft.addImage(bothJet);
      spaceCraft.y  = spaceCraft.y - 5
     }
    
  }
  

  drawSprites();
}

