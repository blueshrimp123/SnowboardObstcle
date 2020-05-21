let snowscape = [];
let me;
var bubbles = [];
let groundtest = [0,100,100,100];
let minimum = 5



function setup(){
    createCanvas(800,400)
    me = new Avatar(200,height/2);

    for (var i = 0; i < 5; i++) {
     bubbles[i] = new Bubble();

       }
     }






function draw() {

  background(0,200,230);

  for (var i = 1; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].display();

      let drift = new Snow(width,frameCount);
      snowscape.push(drift);

      for (let i = 0; i<snowscape.length; i++){
        snowscape[i].drawSnow();
        snowscape[i].moveSnow();
      }

      if (snowscape.length>width){
        snowscape.shift();
      }
    }




  if (snowscape.length>width){
    snowscape.shift();
}


if (frameCount<650){
  textAlign(CENTER)
  noStroke();
  fill("black")
  text("Welcome to Snowboard Obstacles! While this loads, move the snowboarder using the up arrow.", width/2,height/2)
  }

  if(frameCount>650){
  me.drawMe();
  me.moveMe();
  }


  groundtest = get(me.x,me.y+30);


  fill(255,255,51)
    ellipse(750,50,60,60)


  }

  function Bubble(){
    this.x = random(1, width);
    this.y = random(1, height);

    this.display = function() {

      stroke(255);
       strokeWeight(1);
       fill(255)
      ellipse(this.x, this.y, 24, 27);
      ellipse(this.x+10,this.y+10,24,24);
      ellipse(this.x+30,this.y+10,24,24);
      ellipse(this.x+30,this.y-10,24,24);
      ellipse(this.x+20,this.y-10,24,24);
      ellipse(this.x+40,this.y,24,24);




    }

    this.move = function() {
      this.x = this.x += 4 ;
      this.y = this.y + random(-1, 1);

      if(this.x >= width){
      this.x = -1;



      }
    }
  }

class Snow{
  constructor(x,startx,top_of_the_snow){
    this.x=x;
    this.startx = startx;
    this.top_of_the_snow = top_of_the_snow;
  }

  drawSnow(){
    let noiseScale=0.002;
    let noiseVal = noise((this.startx)*noiseScale/2, 80*noiseScale);
    stroke(235);
    this.top_of_the_snow = noiseVal*200+200
    line(this.x, this.top_of_the_snow + 21, this.x, height);

  }

  moveSnow(){

      this.x = this.x -1;


  }

}


class Avatar{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }

  drawMe(){
    fill("black")
    stroke("green")
    ellipse(this.x,this.y,30,30)


  }

  moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= 15;
    }

    if (groundtest[0]<15) { // if you hold the down arrow, move down by speed
        this.y += minimum+5;

    }

	}



}
