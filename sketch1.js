var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    
            
};

function draw() {
    
    strokeWeight(4);
    stroke(255,0,0,100);
    line(mouseX, mouseY, pmouseX, pmouseY);
};

function mousePressed() {
    remove();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}