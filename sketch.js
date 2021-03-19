
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,10,20)
    ground = new Ground(400,390,800,20)
	ground2 = new Ground(100,355,100,50)
	
	dustbin1 = new Dustbin (600,220,10,80);
	dustbin2 = new Dustbin (640,265,80,10)
	dustbin3 = new Dustbin (680,220,10,80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  text("Throw the paper ball into the dustbin by pressing the up arrow key.",400,100)
  text("(Reload the page to try again)",400,120)
  stroke("black")
  strokeWeight(4)
  fill("white")
  text("DUSTBIN",613,300)
  
  paper.display();
  ground.display();
  ground2.display();
  
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  image(dustbinImg,595,170,90,100)
  paper.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-75})

	}

}


