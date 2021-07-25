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
  iss = createSprite(330, 130);
  iss.addImage(iss_Img);
  iss.scale = 0.25
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(noJet);
  spaceCraft.scale = 0.15;
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spaceCraft.x = Math.round(random(50,750));
    spaceCraft.x = spaceCraft.x + random(-1,1);
    
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(leftJet);
      spaceCraft.x  = spaceCraft.x - 5
     }
    
     if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(rightJet);
      spaceCraft.x  = spaceCraft.x + 5
     }
     
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(noJet);
      
     }
    
    if(keyDown("UP_ARROW")){
      
      spaceCraft.y  = spaceCraft.y - 5
     }
    
  }
  

  drawSprites();
}
if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
  hasDocked = true; 
  textSize(25);
  fill("white"); 
  text("Docking Successful!", 200, 300); 
}