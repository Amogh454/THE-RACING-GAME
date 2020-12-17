var bg, bgImage; 
var car, carImage;
var WhiteCar, WhiteCarImage;
var blackCar1, blackCar1Image
var blackCar2, blackCar2Image;
var redCar, redCarImage;
var InvisibleBoundaries;
var InvisibleBoundaries2;
var gameOver, gameOverImage;

var score = 0;



function preload(){
  bgImage = loadImage("road.jpg");
  carImage = loadImage("car.png");
  whiteCarImage = loadImage("WhiteCar.png");
  blackCar1Image = loadImage("blackCar1.png");
  blackCar2Image = loadImage("blackCar2.png");
  redCarImage = loadImage("redCar.png");
  gameOverImage = loadImage("Game-over-2_0-removebg-preview.png");
  
 



}

function setup() {
  createCanvas(600, 400);
  
  bg = createSprite(200, 200, 20, 20);
  bg.addImage(bgImage);
  bg.scale = 1.9;
   bg.x=bg.width/2;
  bg.velocityX=-4;
  
  car = createSprite(100, 300, 20, 20);
  car.addImage(carImage);
  car.scale = 0.3;

  gameOver = createSprite(300, 200, 20, 20);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 0.6
  gameOver.visible = false;
  
  
  

  
  invisibleBoundaries = createSprite(300, 200, 600, 10)
  invisibleBoundaries.visible = false;
  insvisibleBoundaries2 = createSprite(300, 390, 600, 10);
    insvisibleBoundaries2.visible = false;
  
  
  redCarGroup = new Group();
  blackCar1Group = new Group();
  blackCar2Group = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  

  
  if(keyDown("left")){

  }
  if(keyWentUp("up")){
        car.velocityY = -2;
  }
  if(keyWentUp("down")){
    car.velocityY = 2;
  }
  if(keyDown("right")){
    bg.velocityX = -50;
    car.velocityX = 0.5;
  }
  if(keyWentUp("right")){
    bg.velocityX = -20;
  }
 car.collide(invisibleBoundaries);
  car.collide(insvisibleBoundaries2);
    
  if(bg.x<0) {
    bg.x=bg.width/2;
  }
  
  if(car.x>620 ){
    gameOver.visible = true;
    bg.setVelocity(0,0);
    
  }



  redCar();
  blackCar1();
  blackCar2();
  drawSprites();
  
  
}





 //creating continous enemies


function redCar(){
  if(frameCount % 300 === 0){
  var redCar = createSprite(10, 350, 10, 10)
  redCar.addImage(redCarImage);
  redCar.velocityX = 2;
  redCar.lifetime = 300;
  redCar.scale = 0.3;
    
    car.depth = redCar.depth;
    redCar.depth = redCar.depth + 1;
    
    if(redCar.x>600){
      score = score+1;
    }
  
     
  redCarGroup.add(redCar);
  
  }
}

function blackCar1(){
    if(frameCount % 200 === 0){
  var blackCar1 = createSprite(29, 300, 10, 10)
  blackCar1.addImage(blackCar1Image);
  blackCar1.velocityX = 3;
  blackCar1.lifetime = 200;
  blackCar1.scale = 0.3;
    
       blackCar1.depth = car.depth;
    car.depth = car.depth + 1;
      
       if(blackCar1.x>600){
      score = score+1;
    }
    
  blackCar1Group.add(blackCar1);
  
    }
  
}


function blackCar2(){
    if(frameCount % 500 === 0){
  var blackCar2 = createSprite(29, 270, 10, 10)
  blackCar2.addImage(blackCar2Image);
  blackCar2.velocityX = 3;
  blackCar2.lifetime = 200;
  blackCar2.scale = 0.3;
    
       
     blackCar2.depth = car.depth;
    car.depth = car.depth + 1;
      
       if(blackCar2.x>600){
      score = score+1;
    }
  blackCar1Group.add(blackCar2);
  
    }
  
}






