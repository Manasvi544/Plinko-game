   const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var engine,world;
    var plinkos = [];
    var divisions = [];
    var particles = [];
   
    var divisionsHeight = 240;



function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(599,590,1200,30);
  
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,325))
  }
 
 
  for(var k = 0; k <=width; k = k+100){
    divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
  }
}
function draw() { 
  background("black");
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10, 10))
  }

  
   Engine.update(engine);

  
for(var i = 0; i < particles.length; i++){
  particles[i].display();
 }

  for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
   
 }
  ground.display();   

 


}
