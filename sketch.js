//Variables
var bullet,wall,thickness;
var speed,weight;

function setup() {
  //The canvas is 1600 pixels wide and 400 pixels tall
  createCanvas(1600,400);
  
  //Range of speed and weight 
  speed = random(223,321);
  weight = random(30,52);

  //Range of wall thickness
  thickness = random(22,83);

  bullet = createSprite(50,200,50,20);
  wall = createSprite(1200,200,thickness,height/2);

  bullet.shapeColor = "white";
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,0); 
  
  bullet.velocityX = speed;
  
  if (hasCollided(bullet,wall)){
    //The bullet should come to a halt as it hits the wall.
    bullet.velocityX = 0;

    //Calculate the damage of the wall when the bullet collides 
    var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);
    
    //When the collision happens, based on damage calculations, determine the color of the wall as red or green
    //If the damage is greater than 10, then the wall is not effective against the bullet, and bullet color changes to red
    if(damage > 10){
      bullet.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      bullet.shapeColor = color(0,255,0);
    }

  }
  //Function  hasCollided
  hasCollided(bullet,wall);
  
  drawSprites();
}

