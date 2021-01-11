var fixedRect,movingRect;
var rect1,ract2,rect3,rect4;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,40,80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 2;
  movingRect = createSprite(600,200,80,40);
  movingRect.shapeColor = "red";

  rect1 = createSprite(100,100,40,80);
  rect1.shapeColor = "red";

  rect2 = createSprite(300,100,40,80);
  rect2.shapeColor = "red";

  rect3 = createSprite(500,100,40,80);
  rect3.shapeColor = "red";

  rect4 = createSprite(700,100,40,80);
  rect4.shapeColor = "red";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(rect1,movingRect)){
    rect1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    rect1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  bounceOff(rect1,movingRect);
  drawSprites();
}

function isTouching(box1,box2){
  if(box1.x - box2.x < box1.width/2 + box2.width/2 && box2.x - box1.x < box1.width/2 + box2.width/2
    && box1.y - box2.y < box1.height/2 + box2.height/2 && box2.y - box1.y < box1.height/2 + box2.height/2){
    return true;
  } else{
    return false;
  }
}
function bounceOff(box1,box2){
  if(box1.x - box2.x < box1.width/2 + box2.width/2 && box2.x - box1.x < box1.width/2 + box2.width/2){
      box1.velocityX = box1.velocityX * (-1);
      box2.velocityX = box2.velocityX * (-1);
    }
    if(box1.y - box2.y < box1.height/2 + box2.height/2 && box2.y - box1.y < box1.height/2 + box2.height/2){
        box1.velocityY = box1.velocityY * (-1);
        box2.velocityY = box2.velocityY * (-1);
    }
  }