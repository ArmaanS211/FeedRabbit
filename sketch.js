var garden,rabbit,apple, leaf;
var gardenImg,rabbitImg, appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  drawSprites();
  var select = Math.round(random(1, 2));

  if(frameCount % 80 == 0){
    if(select == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 4;
  apple.scale = 0.1;
  apple.lifetime = 100;

}

function createLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY = 4;
  leaf.scale = 0.1;
  leaf.lifetime = 100;

}