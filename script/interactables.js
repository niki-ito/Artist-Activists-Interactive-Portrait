//cursor interactivity
let interactables = [];
let cursorRadius = 15;

//called in setup
function createNewInteractables() {
  
    let workOneInteract = new Interactable(
    103,
    50,
    167,
    100,
    cursorInteractOne,
    interactionOne
  );
  interactables.push(workOneInteract);
  let workTwoInteract = new Interactable(
    103,
    176,
    167,
    100,
    cursorInteractTwo,
    interactionTwo
  );
  interactables.push(workTwoInteract);
  let workThreeInteract = new Interactable(
    103,
    310,
    167,
    98,
    cursorInteractThree,
    interactionThree
  );
  interactables.push(workThreeInteract);
  let toolInteract = new Interactable(
    210,
    560,
    140,
    110,
    cursorInteractFour,
    interactionFour
  );
  interactables.push(toolInteract);
  let subjectInteract = new Interactable(
    360,
    90,
    190,
    450,
    cursorInteractFive,
    interactionFive
  );
  interactables.push(subjectInteract);
    noCursor();
  cursor = new Cursor();
}

//called in draw
function checkInteractableClassFunction() {
    for (let interactable of interactables) {
    interactable.checkHover();
  }

  //cursor
  cursor.display();
}

class Interactable {
  constructor(x, y, w, h, cursorFunction, interactFunction) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cursorFunction = cursorFunction;
    this.interactFunction = interactFunction;

    this.isHovering = false;
  }

  checkMouseOver() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }

  onBeginHover() {
    cursorRadius = 40;
    hoverSound.play(0, 0.7);
  }

  onEndHover() {
    cursorRadius = 15;
    cursor.changeIcon(null);
    hoverSound.play(0, 0.5);
  }

  // While hovering
  checkHover() {
    if (this.checkMouseOver()) {
      if (!this.isHovering) {
        this.onBeginHover();
      }
      this.isHovering = true;
      this.cursorFunction();
    } else {
      if (this.isHovering) {
        this.onEndHover();
      }
      this.isHovering = false;
    }
  }

  checkClick() {
    if (this.checkMouseOver()) {
      this.interactFunction();
    }
  }

  debugDisplay() {
    fill(0, 0, 200, 100);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Cursor {
  constructor() {
    this.radius = cursorRadius;
  }

  changeIcon(newImage) {
    this.currentImage = newImage;
  }

  display() {
    noStroke();
    fill(0, 0, 0, 50);
    circle(mouseX+parallaxX, mouseY+parallaxY, cursorRadius+10)
    fill(211, 237, 225);
    circle(mouseX, mouseY, cursorRadius+10);
    if (this.currentImage) {
      image(this.currentImage, mouseX, mouseY, cursorRadius+5, cursorRadius+5);
    }
  }
}

function mousePressed() {
  for (let interactable of interactables) {
    interactable.checkClick();
  }
}

function cursorInteractOne() {
  cursor.changeIcon(workIcon);
}

function cursorInteractTwo() {
  cursor.changeIcon(workIcon);
}

function cursorInteractThree() {
  cursor.changeIcon(workIcon);
}

function cursorInteractFour() {
  cursor.changeIcon(toolIcon);
}

function cursorInteractFive() {
  cursor.changeIcon(comfortIcon);
}

function interactionOne() {
  applyElements(0);
}

function interactionTwo() {
  applyElements(1);
}

function interactionThree() {
  applyElements(2);
}

function interactionFour() {
  applyElements(3);
}

function interactionFive() {
  // Reset the index to 0
  fgArrayIndex = 0;
  cookieSound.play(0, 1.5);
  applyElements(4);
}