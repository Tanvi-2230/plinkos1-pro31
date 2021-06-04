const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 200;

var score = 0;


function setup() {
  var canvas = createCanvas(windowWidth/2,windowHeight);
  var x = (windowWidth-width)/2;
  var y = (windowHeight-height)/2;
  canvas.position(x,y)



  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-20, width, 15);


  for(var k=0; k <=width; k = k+100){
    divisions.push(new Divisions(k, height-divisionHeight/2-20, 10, divisionHeight));
  }

  for(var j=65; j<=width; j= j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j=40; j<=width; j= j+50){
    plinkos.push(new Plinko(j, 165));
  }

  for(var j=65; j<=width; j= j+50){
    plinkos.push(new Plinko(j, 255));
  }

  for(var j=40; j<=width; j= j+50){
    plinkos.push(new Plinko(j, 345));
  }

}

function draw() {
  background(0,45,45);  
  Engine.update(engine);

  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();

  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30,),10,10));

  }

  for(var j = 0; j< particles.length; j++){
    particles[j].display();

  }

  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();

  } 

  ground.display();
  drawSprites();
}