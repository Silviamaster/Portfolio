var canvas;
let r, g, b;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    
            
};

function draw() {
    
    r = random(255);
    g = random(150);
    b = random(60);
    noStroke();
    fill(r, g, b);
    circle(mouseX, mouseY, 20);
};

function mousePressed() {
    remove();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


 