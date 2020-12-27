
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,height,2000,20);
	stoneobj = new Stone(250,550,30);
	tree = new Tree(1150,400,10,10);
	boy = new Boy(330,625,10,10);
	mango1 = new Mango(1000,300,50,30);
	mango2 = new Mango(1200,170,50,30);
	mango3 = new Mango(1100,200,50,30);
	mango4 = new Mango(1250,300,50,30);
	mango5 = new Mango(1150,250,50,30);
	mango6 = new Mango(1250,230,50,30);
	mango7 = new Mango(1170,300,50,30);
	mango8 = new Mango(1050,250,50,30);
	mango9 = new Mango(1320,290,50,30);
	mango10 = new Mango(1080,340,50,30);

	launcherObject = new Launcher(stoneobj.body,{x:250,y:550});


	Engine.run(engine);
  
}


	function draw() {
	rectMode(CENTER);
	background(225);

	detectollision (stoneobj, mango1) ;
	detectollision(stoneobj, mango2) ;
	detectollision(stoneobj, mango3) ;
	detectollision(stoneobj, mango4) ;
	detectollision (stoneobj , mango5) ;
	detectollision (stoneobj , mango6) ;
	detectollision (stoneobj , mango7) ;
	detectollision (stoneobj , mango8) ;
	detectollision (stoneobj , mango9) ;
	detectollision (stoneobj , mango10) ;


	textSize(27);

	text("Press Space to get a second Chance to Play!!",300,50);
	ground1.display();
	boy.display();
	tree.display();
	stoneobj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	launcherObject.display();    

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcherObject.fly();		
}

function keyPressed(){
if (keyCode === 32){
Matter . Body .setPosition(stoneobj . body, {x:250, y:550})
launcherObject.attach(stoneobj.body);
}
}

function detectollision(lstone,lmango){
	MangoBodyPosition = lmango. body. position 
	StoneBodyPosition = lstone.body.position

var distance = dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
if(distance<=lmango.r + lstone.r)
{
Matter. Body . setStatic(lmango.body, false);
}
}
