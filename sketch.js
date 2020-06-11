const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,block1,polygon;


function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(1000,600);

  ball = new Ball(100,400,30,30);

  sling = new Slingshot(ball.body,{x:100,y:390});

  stand1 = new Stand(510,430,250,10);

  block1 = new Block(420,235,30,40);
  block2 = new Block(450,235,30,40);
  block3 = new Block(480,235,30,40);
  block4 = new Block(510,235,30,40);
  block5 = new Block(540,235,30,40);
  block6 = new Block(570,235,30,40);
  block7 = new Block(600,235,30,40);

  block8 = new Block(450,195,30,40);
  block9 = new Block(480,195,30,40);
  block10 = new Block(510,195,30,40);
  block11 = new Block(540,195,30,40);
  block12 = new Block(570,195,30,40);

  block13 = new Block(480,155,30,40);
  block14 = new Block(510,155,30,40);
  block15 = new Block(540,155,30,40);

  block16 = new Block(510,114,30,40);

}

function draw() {
  background("#FFFF33"); 
  
  //console.log(ball.speed);

  Engine.update(engine);

  

  stand1.display("#FF6600");

  ball.display("#FF6600");

  block1.display("#FF0099");
  block2.display("#FF0099");
  block3.display("#FF0099");
  block4.display("#FF0099");
  block5.display("#FF0099");
  block6.display("#FF0099");
  block7.display("#FF0099");
  
  block8.display("#00FFFF");
  block9.display("#00FFFF");
  block10.display("#00FFFF");
  block11.display("#00FFFF");
  block12.display("#00FFFF");
  
  block13.display("#FFCC33");
  block14.display("#FFCC33");
  block15.display("#FFCC33");

  block16.display("white");
  
  sling.display();

  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  ball.body.speed = 4.5;
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball.body, {x:100,y: 400});
     sling.attach(ball.body);

  }
}
  
