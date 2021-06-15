const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,500,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  
  box2 = new Box(800, 80, 70, 70);
  box3 = new Box(800, 120, 60, 60);
  box4 = new Box(800, 160, 60, 60);
  box5 = new Box(800, 200, 60, 60);
  box6 = new Box(800, 240, 60, 60);
  box7 = new Box(800, 280, 60, 60);
  box8 = new Box(800, 320, 60, 60);
  box9 = new Box(800, 360, 60, 60);

  box10 =new Box(700, 160, 70, 70);
  box11= new Box(700, 200, 60, 60);
  box12= new Box(700, 240, 60, 60);
  box13= new Box(700, 280, 60, 60);
  box14= new Box(700, 320, 60, 60);
  box15= new Box(700, 360, 60, 60);

  box16 =new Box(900, 200, 70, 70);
  box17= new Box(900, 240, 60, 60);
  box18= new Box(900, 280,60, 60);
  box19= new Box(900, 320, 60, 60);
  box20= new Box(900, 360, 60, 60);
  
  
  box21= new Box(600, 110, 70, 70);
  box22= new Box(600, 160, 60, 60);
  box23= new Box(600, 200, 60, 60);
  box24= new Box(600, 240, 60, 60);
  box25= new Box(600, 280, 60, 60);
  box26= new Box(600, 320, 60, 60);
  box27= new Box(600, 360, 60, 60);

 
}

function draw() {
  background(bg);
  Engine.update(engine);
  fill ("blue")
  textSize  (50)
  stroke ("yellow")
  text ("SUPERHERO KILLS THE MONSTER",100,80)
  ground.display();
  
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display();
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  hero.display();
  rope.display();
  monster.display();
  

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()

}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(hero.body,{x:500,y:50})
    rope.attach(hero.body)
  }
}
