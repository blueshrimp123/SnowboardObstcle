let noiseScale=0.02;

function draw() {
  createCanvas(800,600)
background(0,200,230);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((x)*noiseScale/2, 80*noiseScale);
    stroke(235);
    line(this.x, noiseVal*200+200, x, height);

    this.move = function() {
      this.x = this.x += 5 ;
      this.y = this.y + random(-1, 1);

      if(this.x >= width){
      this.x = 1; 
