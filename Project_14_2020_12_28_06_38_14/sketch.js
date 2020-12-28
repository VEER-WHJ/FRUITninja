var PLAY = 1;
var END = 0;
var gameState = PLAY;
var fruitGroup, fruit1, fruit2, fruit3, fruit4;
var score;
var sword
var swordImg

function preload(){
  swordImg = loadImage("sword.png");
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  enemyImg=loadImage("alien1.png")
  gameEnd=loadImage("gameover.png")
  end=loadSound("gameover.mp3")
  slash=loadSound("knifeSwooshSound.mp3")
}



function draw() {
  background("lightblue");
  
  text ("score:" + score, 450, 50)
  sword.y=World.mouseY
  sword.x=World.mouseX
  if (sword.isTouching(fruitGroup)){
    score=score+2;
    slash.play();
    fruitGroup.destroyEach();
  }
  if (sword.isTouching(enemyGroup)){
    sword.destroy();
    gameOver = createSprite(250, 250, 20, 20)
    gameOver.addImage(gameEnd)
    end.play();
    gameState=0
    fruitGroup.destroyEach();
  }
  enemies();
  fruits();
  drawSprites();
}

function fruits() {
  if (World.frameCount % 80===0){
    fruit=createSprite(40, 200, 20, 20)
    fruit.scale=0.2
    r=Math.round(random(1, 4));
    if (r==1){
      fruit.addImage(fruit1)
    }else if (r==2){
      fruit.addImage(fruit2)
    }else if (r==3){
      fruit.addImage(fruit3)
    }else {
      fruit.addImage(fruit4)
    }
    fruit.y=Math.round(random(50, 340))
    fruit.velocityX=7;
    fruit.setlifetime=100
    fruitGroup.add(fruit);
  }
}
function enemies() {
  if (World.frameCount % 200===0){
    enemy=createSprite(40, 200, 20, 20)
    enemy.addImage(enemyImg)
    enemy.y=Math.round(random(50, 340))
    enemy.velocityX=8;
    enemy.setlifetime=100
    enemyGroup.add(enemy);
  }
}
function setup() {
  createCanvas(500, 500);
  sword=createSprite(40, 200, 20, 20);
  sword.addImage(swordImg, "sword.png");
  sword.scale = 0.7;
  sword.setCollider("circle",20,-20,45);
  sword.debug = true;
  score = 0;
  fruitGroup = createGroup();
  enemyGroup = createGroup();
}