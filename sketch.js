
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob = new Circle(210,565,80,80)
	bob2 = new Circle(290,565,80,80)
	bob3 = new Circle(370,565,80,80)
	bob4 = new Circle(450,565,80,80)
	bob5 = new Circle(530,565,80,80)
    roof = new Roof(180,150,410,40)
    slingshot = new Slingshot(bob.body,{x:200, y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180,150);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 slingshot.display();
  drawSprites();
 
}



