var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {

	createCanvas(800, 700);

	rectMode(CENTER);

	packageSprite=createSprite(width/2, 600, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,5);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(400,660,800,10);
	box1.shapeColor = color("red");

	box2 = createSprite(5,560,10,200);
	box2.shapeColor = color("red");

	box3 = createSprite(795,560,10,200);
	box3.shapeColor = color("red");

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 World.add(world,box1);
	 
	box1 = Bodies.rectangle(300, 600, 300, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  background(0);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)
    
  }
}
