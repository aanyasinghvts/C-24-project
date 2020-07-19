
var ground,paper1,boxBase,boxBottomBody,boxLeftBody,boxleftSprite,boxPosition,boxRightBody,boxY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,150,800,20);
	paper1 = new paper(200,160,10);

	boxPosition=width/2-100
	boxY=610;
	 
	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   ground.display();
 
}

function keupressed(){
	if (keycode === UP_ARROW){
		Matter.Body.applyforce(paper1.body, paper1.body.position,{x:85, y:-85})
	}
}



