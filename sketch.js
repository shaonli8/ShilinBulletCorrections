var  wall,thickness;

var  bullet,speed, weight;





function setup() {
  createCanvas(1000,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  
  bullet = createSprite(50,200,50,10)
  wall = createSprite(800,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(0); 
  
  if(wall.x - bullet.x<=(bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = color(225,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,225,0);
    }
  }
  drawSprites();
}