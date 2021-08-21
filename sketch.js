 var track, trackImg;
 var runner, runnerImg1, runnerImg2;
function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  runnerAni = loadAnimation("Runner-1.png", "Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage("track", trackImg);
  track.velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(200,350);
  runner.addAnimation("runing", runnerAni);
  
  runner.scale = 0.1;
}


function draw() {
  background(0);
  if (track.y > 400) {
    track.y = height/2; 
  }

  runner.x = World.mouseX
 

  drawSprites();
}
