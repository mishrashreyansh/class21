var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 2;

  fixedRect2 = createSprite(200, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect3 = createSprite(400, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect4 = createSprite(800, 400, 50, 80);
  fixedRect4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 if(isTouching(movingRect,fixedRect2))
 {
  movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
 } 

 else
 {
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
 }


 bounceOff(movingRect,fixedRect3);
  drawSprites();
}

