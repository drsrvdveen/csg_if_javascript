var g = 75;
var n = 5;
function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}
 
function draw() {
  noStroke();
  translate(0,height/2);
  for(var x=0; x<n; x+=1) {
      rect(0,0,g,g);
      if(x==1){
          fill('blue');
      }
      else {
      fill('red');
      text("x="+x,0,0)
      }
      
      translate(g+(width+g/4-n*g)/n,0);
  }
}