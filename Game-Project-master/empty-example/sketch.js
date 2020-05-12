let noiseScale=0.02;
let b

function setup() {
  createCanvas(800, 600);
  b = line


function draw() {
  background(0,200,230);

  b.moveline


  for (let x = 0; x < width; x++) {
  let noiseVal = noise((x)*noiseScale/2, 80*noiseScale);

  stroke(235);
  line(x, noiseVal*200+200, x, height);

  class line {

    moveline(){
      this.x = this.x+2;
    }


  }












    }






    }
}














    // let noiseScale=0.02;
    //
    // function draw() {
    //   createCanvas(800,600)
    // background(0,200,230);
    //
    //
    //
    // for (let x = 0; x < width; x++) {
    //     let noiseVal = noise((x)*noiseScale/2, 80*noiseScale);
    //
    //     stroke(235);
    //     line(x, noiseVal*200+200, x, height);
    //
    //
    //
    //
    //
    //
    //
    //
    //     }
    //
    //
    //
    //
    //
    //
    //     }
