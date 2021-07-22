var mario,obstacle,ground,coin;
var marioImg,marioJumping,obstacleImg,groundImg,coinImg,jumpSound;

function preload(){
    marioImg=loadImage('images/mario.png');
    marioJumping=loadImage('images/marioJumping.png');
    
    obstacleImg=loadImage('images/obstacle.png');

    groundImg=loadImage('images/marioGround.png');

    coinImg=loadImage('images/coin.png');

    jumpSound=loadSound('Mario-jump-sound.mp3');
}

function setup(){
    createCanvas(800,400);
    mario=createSprite(100,320,15,15);
    mario.addImage(marioImg);
    mario.scale=0.01;

    ground=createSprite(600,400,1600,100);
    ground.addImage(groundImg);
    ground.scale=0.6; 
    ground.velocityX=-6;   
}

function draw(){
    background('lightblue');

    mario.collide(ground);
    mario.velocityY+=0.8;

    if(keyDown('space')&&mario.y>330){
        mario.velocityY=-15;
    }
    
    if(ground.x<=190){
        ground.x=600;
    }

    if(frameCount%500===0){
        ground.velocityX-=1;
    }

    drawSprites();
}

function spawnObstacles(){
    if(frameCount%170===0){
        var rand=round(random(0,2));
        switch(rand){
            case 0:
                var obstacle1=createSprite()
        }
        
        
        
        
    }
}