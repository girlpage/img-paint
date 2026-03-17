let brushImg;
let fileInput;
let brushSize = 60;

let savePNGButton;
let saveJPGButton;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  // Bild Upload
  fileInput = createFileInput(handleFile);
  fileInput.position(10, 10);

  // Export Buttons
  savePNGButton = createButton("Export PNG");
  savePNGButton.position(10, 40);
  savePNGButton.mousePressed(savePNG);

  saveJPGButton = createButton("Export JPG");
  saveJPGButton.position(110, 40);
  saveJPGButton.mousePressed(saveJPG);

  textSize(14);
}

function draw() {

  fill(0);
  noStroke();
  text("upload an image and draw with it", 10, 80);

  if (mouseIsPressed && brushImg) {
    imageMode(CENTER);
    image(brushImg, mouseX, mouseY, brushSize, brushSize);
  }

}

// Bild laden
function handleFile(file) {
  if (file.type === 'image') {
    brushImg = loadImage(file.data);
  }
}

// Pinselgröße mit Mausrad
function mouseWheel(event) {
  brushSize += event.delta * -0.05;
  brushSize = constrain(brushSize, 10, 300);
}

// Export PNG
function savePNG() {
  saveCanvas("drawing", "png");
}

// Export JPG
function saveJPG() {
  saveCanvas("drawing", "jpg");
}