const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var wall,thickness,bullet,speed,weight,engine,world;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    thickness=random(22,83);
    wall= createSprite(900,200,thickness,height/2);
    bullet=createSprite(100,200,40,40);
    
    speed=random(223,321);
    bullet.velocityX=speed;
    weight=random(30,52);
   
}

function draw(){
    background("black");
   
    Engine.update(engine);
    
    if(has_Collided(bullet,wall)){
        bullet.velocityX=0;
        bullet.depth=wall.depth-1;
        bullet.x=wall.x-30;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
        bullet.shapeColor=color(255,0,0);
    } 
    if(damage<10){
        bullet.shapeColor=color(0,255,0);
    } 
    }
    drawSprites()
}
function has_Collided(lbullet,lwall){

    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge= lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true;
    } else {
        return false;
    }
}