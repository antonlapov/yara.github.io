function setup() {
    createCanvas(displayWidth, displayHeight);
    background(102);
  }
  
  function draw() {
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  
  function variableEllipse(x, y, px, py) {
    let speed = abs(x-px) + abs(y-py);
    stroke(speed);
    fill(random(20,255), random(0,100),random(255));
    ellipse(x, y, speed, speed);
  }