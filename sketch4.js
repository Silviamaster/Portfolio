var canvas;
var angle=0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    stroke(50,100);
    rectMode(CENTER);
    
            
};

function draw() {
    
    translate(mouseX, mouseY);
    rotate(angle);
    angle += 0.1;
    rect(0,0,10,70,5,5,5,5);
};

function mousePressed() {
    remove();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



