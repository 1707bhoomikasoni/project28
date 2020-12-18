var tree,ground,mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,boy,stone1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  tree=new Tree(600,50,50,50)
  ground=new Ground(400,height,800,20)
  mango1=new Mango(700,200,30)
  mango2=new Mango(600,300,30)
  mango3=new Mango(630,240,30)
  mango4=new Mango(670,170,30)
  mango5=new Mango(730,260,30)
  mango6=new Mango(750,300,30)
  mango7=new Mango(720,350,30)
  mango8=new Mango(690,320,30)
  boy=new Juno(200,500,100,300)
  stone1=new Stones(200,185,40)
   sling=new Slingshot(stone1.body,{x:150,y:550})

}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  tree.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  boy.display()
  sling.display()
  stone1.display()
 
 }

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
sling.fly()
}