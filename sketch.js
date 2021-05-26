var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 40);
  fixedRect.shapeColor= "green"
  movingRect=createSprite(600, 200, 60, 30);
  movingRect.shapeColor= "green"
  fixedRect.velocityX=1;
  movingRect.velocityX=-1;
}

function draw() {
  background("black");  
  /* movingRect.x= mouseX;
  movingRect.y = mouseY;
///// this algorith is for touching and overlapping of two objects
  if (movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2 && 
    movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor= "red"
    movingRect.shapeColor= "red"
  }
  else{
    fixedRect.shapeColor= "green"
    movingRect.shapeColor= "green"
  } */
  ///// algorithm for bounce off
  if (movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2){
      fixedRect.velocityX= fixedRect.velocityX*(-1);
      movingRect.velocityX= movingRect.velocityX*(-1);
    }
  drawSprites();
}