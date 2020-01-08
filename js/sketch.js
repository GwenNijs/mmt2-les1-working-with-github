var rood = 255;
var blauw = 255;
var geel = 255;
var vincent = "hallo";

function setup() {
  // put setup code here

  createCanvas(400,400);
  


var vincent = "hallo";


}

function draw() {

  background(0,400-mouseX,0);
 
  console.log(vincent);
  fill(200,15,30);
  ellipse(200,200,mouseX,mouseY);

  fill(300,150,130);
  rect(100,100,200,200);

  fill(100,150,30);
  ellipse(200,200,mouseX,mouseY);

  line(0,200,400,200);
  line(200,0,200,400);

  stroke(255); 
  line(0,200,400,200);
  line(200,0,200,400);




}