let bgImage;
let mgImage;

let mgShadow;

let workIcon;
let toolIcon;
let comfortIcon;

let cookieSound;
let hoverSound;
let bgSound;

// array of images
let fg = [];
let fgShadow = [];
let mistLoop = [];

// For storing current display index
let fgArrayIndex = 0;
let mistArrayIndex = 0;

// For storing timing, 100 ms between frames
// means 10 frames per second
let timeBetweenFrames = 400;
// we will update this for timing
let lastFrameTime = 0;
let lastLoopTime = 0;

//parallax effect
let parallaxX;
let parallaxY;

let picture1;
let picture2;
let picture3;

function preload() {
  bgImage = loadImage("./assets/images/bg.jpg");
  mgImage = loadImage("./assets/images/mg.png");

  mgShadow = loadImage("./assets/images/mg_shadow.png");

  picture1 = loadImage("./assets/images/img1.jpeg");
  picture2 = loadImage("./assets/images/img2.jpeg");
  picture3 = loadImage("./assets/images/img3.png");

  workIcon = loadImage("./assets/images/icons/work.png");
  toolIcon = loadImage("./assets/images/icons/tool.png");
  comfortIcon = loadImage("./assets/images/icons/heart.png");

  cookieSound = loadSound("./assets/audio/cookie-eating.wav");
  hoverSound = loadSound("./assets/audio/bip.mp3");
  bgSound = loadSound("./assets/audio/bg-music.m4a");

  //a more descrete way to load multiple sequential files
  for (let i = 1; i < 6; i++) {
    fg.push(loadImage("./assets/images/fg_animate/eating" + i + ".png"));
    fgShadow.push(loadImage("./assets/images/fg_animate/shadow" + i + ".png"));
  }

  for (let i = 1; i < 7; i++) {
    mistLoop.push(loadImage("./assets/images/mist_loop/mist" + i + ".png"));
  }
}
function setup() {
  canvas = createCanvas(950, 650);
  canvas.style("width", "100%");
  canvas.style("height", "auto");
  canvas.parent("canvas");

  imageMode(CENTER);

  bgSound.loop(0, 1, 0.1);

  //see interactables.js
  createNewInteractables();

  //see text.js
  category = select("span");
  title = select("h3");
  paragraph = select("p");
  caption = select("figcaption");
  textElements();
  imageAndIconElements();

}

function draw() {
  background(220);

  parallaxX = map(mouseX, 0, width, width / 10, -width / 10);
  parallaxY = map(mouseY, 0, width, width / 12, -width / 12);

  //background
  image(bgImage, width / 2, height / 2);

  //middleground
  //framed pictures
  image(picture1, 198, 100, 200, 120);
  image(picture2, 198, 226, 200, 120);
  image(picture3, 198, 358, 200, 120);
  //store interior
  image(mgShadow, width / 2 + parallaxX / 4, height / 2 + parallaxY / 7);
  image(mgImage, width / 2 - parallaxX / 5, height / 2 - parallaxY / 8);

  //foreground
  
    //animate figure, figureShadow, and tea mist
    // Check if it is time to switch frames
    if (millis() - lastFrameTime > timeBetweenFrames) {
      // Make sure we aren't at the end
      if (fgArrayIndex < 4) {
        // Move up one in the frame index
        fgArrayIndex++;
        // Update the time for the frame switch
        lastFrameTime = millis();
      }
    }
    if (millis() - lastLoopTime > timeBetweenFrames) {
      if (mistArrayIndex < 5) {
        mistArrayIndex++;
        lastLoopTime = millis();
      } else {
        mistArrayIndex = 0;
      }
    }

  // Draw the image in the current index
  image(
    fgShadow[fgArrayIndex],
    width / 2 + parallaxX / 2,
    height / 2 + parallaxY / 4
  );
  image(
    fg[fgArrayIndex],
    width / 2 - parallaxX / 3,
    height / 2 - parallaxY / 5
  );

  image(
    mistLoop[mistArrayIndex],
    width / 2 - parallaxX / 3,
    height / 2 - parallaxY / 5
  );

  checkInteractableClassFunction();
  
}

