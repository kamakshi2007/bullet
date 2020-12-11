var wall,thickness;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1300,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color("white");

}

function draw() {
  background(180); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * bullet.weight * bullet.speed * bullet.speed/wall.Thickness * wall.Thickness *wall.Thickness ;
      if(damage>10){
        wall.shapeColor = color("red");
     }
      if(damage<10){
        wall.shapeColor = color("green");
      }
  
  
  }
  drawSprites();
}
function hasCollided( lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall. x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}