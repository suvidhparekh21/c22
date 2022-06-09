const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , ground;
var ball;

function setup() {
  createCanvas(800,400);
 
engine = Engine.create();
world = engine.world;
var groundoption = {
  isStatic : true
}

ground = Bodies.rectangle(0,350,800,50,groundoption);
World.add(world,ground);

var balloption = {
  restitution : 1.0
}

ball = Bodies.circle(200,100,20,balloption);


World.add(world,ball);


}

function draw() {
  background("black");  
  //rectMode(CENTER)
Engine.update(engine);

rect(ground.position.x,ground.position.y,800,50);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}