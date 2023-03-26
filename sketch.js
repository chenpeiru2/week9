function setup() {
  createCanvas(1000, 700);
  video= createCapture(VIDEO);
  video.size(width,height),
    video.hide();
}
function draw() {
  background(0);
  
  let gridSize= 20;
  video.loadPixels();
  for (let y=0;y<video.height;y+=gridSize){
  for (let x=0;x<video.width;x+=gridSize){
    let index=(y*video.width+x)*4;
    let r= video.pixels[index];
    let dia= map(r,0,400,gridSize,0);
    noFill(47,239,0);
    stroke(47,239,0);
    square(x,y,dia);
    
  }
  }
}






