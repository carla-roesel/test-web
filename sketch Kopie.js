let mic;
let amplitude;

function setup() {
  createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start();
  
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
}

function draw() {
  background(0, 0, 200);

  let level = amplitude.getLevel();  // Hol die Lautstärke des Mikrofoneingangs
  let ellipseWidth = 100;
  let ellipseHeight = 25;
  let spacing = 40;

  for (let i = 0; i < 10; i++) {
    let x = width / 2;
    let y = i * spacing + 20;

    let ellipseColor = map(mouseY, 0, height, 0, 255);
    fill(ellipseColor, 255, 192, 203);
    stroke (255, 100, 200);
    strokeWeight (4);

    ellipse(x, y, ellipseWidth, ellipseHeight);

    let circleX;
    if (i % 2 === 0) {
      circleX = x - ellipseWidth / 2 - 15;
    } else {
      circleX = x + ellipseWidth / 2 + 15;
    }

    let circleY = y + map(level, 0, 0.3, -30, 30); 

    let circleDiameter = 10;
    ellipse(circleX, circleY, circleDiameter, circleDiameter);
  }
}