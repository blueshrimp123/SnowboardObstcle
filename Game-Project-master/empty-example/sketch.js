let snowscape = [];
var bubbles = [];


function setup() {
  createCanvas(800, 500);
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


    fill(255,255,51)
    ellipse(750,50,60,60)



  }


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
  constructor(x,startx){
    this.x=x;
    this.startx = startx;
  }

  drawSnow(){
    let noiseScale=0.012;
    let noiseVal = noise((this.startx)*noiseScale/2, 80*noiseScale);
    stroke(235);
    line(this.x, noiseVal*200+200, this.x, height);

  }

  moveSnow(){
    this.x = this.x -1;

  }

}
