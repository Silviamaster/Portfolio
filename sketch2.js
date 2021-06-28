var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    noStroke();
    rectMode(CENTER);  
            
};

function draw() {
    
    if (frameCount % 10 == 0) {
        fill(random(255), random(150), random(60), 100);
        push();
        translate(windowWidth/3,windowHeight/1.4);
        rotate(radians(frameCount));
        rect(0,0,200,25);
        pop();
    }


    if (frameCount % 15 == 0) {
        fill(random(255), random(150), random(60), 100);
        push();
        translate(windowWidth/4,windowHeight/3);
        rotate(radians(frameCount));
        rect(0,0,200,25);
        pop();
    }

    if (frameCount % 10 == 0) {
        fill(random(255), random(150), random(60), 100);
        push();
        translate(windowWidth/1.2,windowHeight/6);
        rotate(radians(frameCount));
        rect(0,0,200,25);
        pop();
    }

    if (frameCount % 5 == 0) {
        fill(random(255), random(150), random(60), 100);
        push();
        translate(windowWidth/2,windowHeight/2);
        rotate(radians(frameCount));
        rect(0,0,200,25);
        pop();
    }

};

function mousePressed() {
    remove();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

