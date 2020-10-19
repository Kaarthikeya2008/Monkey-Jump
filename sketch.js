var monkey , monkey_running
var bananas ,bananasImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananasImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey=createSprite(100,260,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.10;
  
 
  
  ground=createSprite(100,295,600,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
 
  
  
  
  bananasGroup=new Group();
  obstacleGroup=new Group();
  

  
}


function draw() {
background("white");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  //movement for monkey
  if (keyWentDown("space")){
    monkey.velocityY=-10;
  }
  //adding gravity
  monkey.velocityY=monkey.velocityY+0.5;
  
  
  monkey.setCollider("circle",0,0,250 );
  //monkey.debug=true;
  
  spawnBananas();
  spawnObstacle();
  
  
  
  
  
  
  
  
  
  
  
   console.log(ground.x);
  
  monkey.collide(ground);
  
  drawSprites();
}
function spawnBananas (){
  //code to spawn bananas
  if (frameCount%80===0){
  bananas= createSprite(600,120,40,10);
  bananas.velocityX=-5;
  bananas.y = Math.round(random(120,200));
  bananas.addImage(bananasImage);
  bananas.scale=0.10;
  
  }      
}
function spawnObstacle(){
  //code to spawn obstacles
  if (frameCount%80===0){
    obstacle=createSprite(600,20,20,20);
    obstacle.velocityX=-5;
    obstacle.x=Math.round(random(100,600));
    obstacle.y=Math.round(random(250,350));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.10;
  }
}
    
    






  
 
         

    
    





