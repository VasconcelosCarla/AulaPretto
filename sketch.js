var trex, trex_correndo, trex_colide;
var solo, soloInvisivel, soloImg;

var nuvem, grupoNuvem , nuvemImg;



var newImage;

function preload(){
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_colide = loadAnimation("trex_collided.png");
  
  soloImg = loadImage("ground2.png");
  
  nuvemImg = loadImage("cloud.png");

 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo", trex_correndo);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  solo = createSprite(200,180,400,20);
  solo.addImage("solo",soloImg);
  solo.x = solo.width /2;
  solo.velocityX = -4;
  
  soloInvisivel = createSprite(200,190,400,10);
  soloInvisivel.visible = false;

  console.log("olá" + 5);
  
  
}

function draw() {
  background(180);
  
  
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (solo.x < 0){
    solo.x = solo.width/2;
  }
  
  trex.collide(soloInvisivel);
  
  //gerar as nuvens
  gerarNuvens();
  //gera os obstáculos
  gerarObstaculos();
  
  drawSprites();
}

function gerarObstaculos(){


}

function gerarNuvens() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    nuvem = createSprite(600,100,40,10);
    nuvem.addImage(nuvemImg)
    nuvem.y = Math.round(random(10,60))
    nuvem.scale = 0.4;
    nuvem.velocityX = -3;

    //atribua tempo de vida à variável
    nuvem.lifetime = 210;
    
    //ajuste a profundidade
    nuvem.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

