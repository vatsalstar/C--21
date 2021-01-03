var car,wall;
var weight,speed;



function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(300,1500)

  car =  createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2); 
}

function draw() {
  background(255,255,255);  

if(wall.X-car.X<(car.width+wall.width)/2)
{

  car.velocityX = 0;
  car.deformation = (0.5 * weight * speed * speed)/22509;
  if(deformation<100)
{

  car.shapeColor ="red";
}
if(deformation<100 && deformation>180)
{

  car.shapeColor = "blue";
}
if(deformation>180)
{

car.shapeColor = "yellow";

}

if(hasCollided(bullet,wall){
bullet.velocityX=0;
var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10){
wall.shapeColor=color(0,255,0);
}
}

}
drawSprites();
}

function hasCollided(bullet,wall){
bullet.RightEdge = bullet.X +bullet.width;
wall.LeftEdge = wall.X;
if (bulletRightEdge>=wall.LeftEdge)
{
  return true
}
return false;
}

