const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;
	
	roofObject = new roof(width/2,height/4,width/7,20);

	bobDiameter = 40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+200;
	b1 = new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	b2 = new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	b3 = new bob(startBobPositionX,startBobPositionY,bobDiameter);
	b4 = new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	b5 = new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	r1=new rope(b1.body,roofObject.body,-bobDiameter*2,0)
	r2=new rope(b2.body,roofObject.body,-bobDiameter*1,0)
	r3=new rope(b3.body,roofObject.body,0,0)
	r4=new rope(b4.body,roofObject.body,bobDiameter*1,0)
	r5=new rope(b5.body,roofObject.body,bobDiameter*2,0)

	Engine.run(engine);
}

function draw() {
 
	rectMode(CENTER);
	background(72);
	roofObject.display();
	r1.display();
	r2.display();
	r3.display();
	r4.display();
	r5.display();
	b1.display()
	b2.display()
	b3.display()
	b4.display()
	b5.display()
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(b1.body,{x: b1.body.position.x, y: b1.body.position.y},{x: -50,y: -45});
	}
}