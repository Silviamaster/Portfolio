
var canvas;
let x = 200;
let y = 180;

let xspeed = 4;
let yspeed = 2;
let r = 25;

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0, 0);
                       
};


function draw() {
  
  noStroke();
  fill(random(100),random(200), random(200));
  ellipse(x, y, r*2, r*2);
 
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

}

function mousePressed() {
   remove();
};

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
};


 