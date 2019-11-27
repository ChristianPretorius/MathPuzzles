let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let answer = 0;
let numbers = [];
let previousNumber = 0;
let currentNumber = 0;
let currentOpperand = "0";
let currentAnswer = 0;
let num1Active = true;
let num2Active = true;
let num3Active = true;
let num4Active = true;
let time = 201;
let streak = 0;
let startTime = 0;
let score = 0;
let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER);
  distance = min(windowWidth, windowHeight) / 150;
  textSize(distance * 2);
  numbers = [num1, num2, num3, num4];
  randomNumbers();
}

function draw() {
  background(220);
  
  startTime += deltaTime;
  
  if (time<200){
    time += deltaTime;
  }
  drawTime();
  drawAnswer();
  drawNumbers();
  drawButtons();
  checkCorrect();

}

function drawTime(){
  
  textSize(distance*5);
  fill(0);
  text(str(100-int(startTime / 1000)), distance*5, distance*5);
  textAlign(LEFT);
  text("Streak: " + str(streak), distance*2, distance*10);
  text("Score: " + str(score), distance*2, distance*15);
  fill(0,200,0);
  text("+" + str(int((100-(startTime/1000))*(streak+1))), distance*(20 + 2.5*str(score).length), distance*15);
  fill(0);
  textAlign(CENTER);
  
  if (startTime > 100*1000){
    reset();
    randomNumbers();
    streak = 0;
    startTime = 0;
    score = 0;
  }
}

function checkCorrect() {
  if (currentAnswer == answer && !num1Active && !num2Active && !num3Active && !num4Active) {
    score += int((100-(startTime/1000))*(streak+1));
    streak+=1;
    reset();
    randomNumbers();
    startTime = 0;
  }
}

function drawButtons() {

  textSize(distance * 8);
  
  noFill();
  rect(width - distance * 12, distance * 8, 23 * distance, 15 * distance, 2 * distance);
  rect(width / 2 - 30 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  rect(width / 2 - 10 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  rect(width / 2 + 10 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  rect(width / 2 + 30 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  rect(width / 2, height * 5 / 8, 75 * distance, 15 * distance, 2 * distance);
  
  fill(0);
  text("new", width - distance * 12, distance * 8 + 2.5 * distance);
  text("/", width / 2 - 30 * distance, height / 2 + 2.5 * distance);
  text("x", width / 2 - 10 * distance, height / 2 + 2.5 * distance);
  text("–", width / 2 + 10 * distance, height / 2 + 2.5 * distance);
  text("+", width / 2 + 30 * distance, height / 2 + 2.5 * distance);
  text("reset", width / 2, height * 5 / 8 + 2.5 * distance);
  fill(220);
  
  if (currentOpperand == "/") {
    rect(width / 2 - 30 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  }
  
  if (currentOpperand == "*") {
    rect(width / 2 - 10 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  }
  
  if (currentOpperand == "-") {
    rect(width / 2 + 10 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  }
  
  if (currentOpperand == "+") {
    rect(width / 2 + 30 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
  } 
  
  fill(0);
}

function drawAnswer() {
  
  textSize(distance * 20);
  //stroke(255,0,0)
  fill(255,40,40);
  text(str(answer), width / 2, height / 6);
  fill(40,40,255);
  text(str(currentAnswer), width / 2, height * 5 / 6);
  fill(0,0,0);
}

function drawNumbers() {
  textSize(distance * 14);
  if (num1Active) {
    text(str(num1), width / 2 - 30 * distance, height * 3 / 8);
  }
  if (num2Active) {
    text(str(num2), width / 2 - 10 * distance, height * 3 / 8);
  }
  if (num3Active) {
    text(str(num3), width / 2 + 10 * distance, height * 3 / 8);
  }
  if (num4Active) {
    text(str(num4), width / 2 + 30 * distance, height * 3 / 8);
  }

}

function reset() {
  previousNumber = 0;
  currentNumber = 0;
  currentOpperand = "0";
  currentAnswer = 0;
  num1Active = true;
  num2Active = true;
  num3Active = true;
  num4Active = true;
  started = false;
}

function checkClick() {

  // reset button clicked
  if (mouseX > width / 2 - 37.5*distance && mouseX < width / 2 + 37.5*distance && mouseY > height * 5 / 8 - 7.5 * distance && mouseY < height * 5 / 8 + 7.5*distance) {
    reset();
    streak=0;
  }

  // new button clicked
  if (mouseX > width - distance * 24 && mouseY < distance * 16) {
    reset();
    randomNumbers();
    streak=0;
    startTime = 0;
  }

  // setting x and y for all opperand buttons
  bayo = height / 2 - 15 * distance / 2;
  bayc = height / 2 + 15 * distance / 2;

  b1xo = width / 2 - 30 * distance - 15 * distance / 2;
  b1xc = width / 2 - 30 * distance + 15 * distance / 2;
  
  b2xo = width / 2 - 10 * distance - 15 * distance / 2;
  b2xc = width / 2 - 10 * distance + 15 * distance / 2;

  b3xo = width / 2 + 10 * distance - 15 * distance / 2;
  b3xc = width / 2 + 10 * distance + 15 * distance / 2;

  b4xo = width / 2 + 30 * distance - 15 * distance / 2;
  b4xc = width / 2 + 30 * distance + 15 * distance / 2;

  // check to see if any opperand buttons were clicked
  if (mouseY > bayo && mouseY < bayc) {
    if (mouseX > b1xo && mouseX < b1xc) {
      currentOpperand = "/";
    }
    if (mouseX > b2xo && mouseX < b2xc) {
      currentOpperand = "*";
      rect(width / 2 - 10 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
    }
    if (mouseX > b3xo && mouseX < b3xc) {
      currentOpperand = "-";
      rect(width / 2 + 10 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
    }
    if (mouseX > b4xo && mouseX < b4xc) {
      currentOpperand = "+";
      rect(width / 2 + 30 * distance, height / 2, 15 * distance, 15 * distance, 2 * distance);
    }

  }

  // setting x and y for all numbers
  nayo = height * 3 / 8 - 15 * distance / 2;
  nayc = height * 3 / 8 + 15 * distance / 2;

  n1xo = width / 2 - 30 * distance - 15 * distance / 2;
  n1xc = width / 2 - 30 * distance + 15 * distance / 2;

  n2xo = width / 2 - 10 * distance - 15 * distance / 2;
  n2xc = width / 2 - 10 * distance + 15 * distance / 2;

  n3xo = width / 2 + 10 * distance - 15 * distance / 2;
  n3xc = width / 2 + 10 * distance + 15 * distance / 2;

  n4xo = width / 2 + 30 * distance - 15 * distance / 2;
  n4xc = width / 2 + 30 * distance + 15 * distance / 2;

  // check to see if any numbers were clicked
  if (mouseY > nayo && mouseY < nayc && (currentOpperand != "0" || currentNumber == 0)) {
    if (mouseX > n1xo && mouseX < n1xc && num1Active) {
      currentNumber = num1;
      num1Active = false;
      calculateCurrent();
    }
    if (mouseX > n2xo && mouseX < n2xc && num2Active) {
      currentNumber = num2;
      num2Active = false;
      calculateCurrent();
    }
    if (mouseX > n3xo && mouseX < n3xc && num3Active) {
      currentNumber = num3;
      num3Active = false;
      calculateCurrent();
    }
    if (mouseX > n4xo && mouseX < n4xc && num4Active) {
      currentNumber = num4;
      num4Active = false;
      calculateCurrent();
    }
  }
}

function calculateCurrent() {
  if (currentAnswer == 0 && !started) {
    if (currentNumber != 0) {
      currentAnswer = currentNumber;
      started = true;
    }
  } else {
    if (currentOpperand == "/") {
      currentAnswer /= currentNumber;
      currentOpperand = "0";
    }
    if (currentOpperand == "*") {
      currentAnswer *= currentNumber;
      currentOpperand = "0";
    }
    if (currentOpperand == "-") {
      currentAnswer -= currentNumber;
      currentOpperand = "0";
    }
    if (currentOpperand == "+") {
      currentAnswer += currentNumber;
      currentOpperand = "0";
    }
  }
}

function mousePressed() {
  if (time > 200){
    checkClick();
    time = 0;
  }
}

function touchStarted(){
  if (time > 200){
    checkClick();
    time = 0;
  }
}

function randomNumbers() {
  num1 = floor(random(9)) + 1;
  num2 = floor(random(9)) + 1;
  num3 = floor(random(9)) + 1;
  num4 = floor(random(9)) + 1;

  createAnswer();
}

function createAnswer() {

  numCopy = [num1, num2, num3, num4];

  tempFirst = 0;
  answer = 0;

  for (i = 0; i < 4; i++) {
    operator = floor(random(4));

    if (numCopy.length > 3) {
      tempFirst = numCopy.pop();

    } else if (numCopy.length == 3) {
      if (operator == 0) {
        answer = tempFirst * numCopy.pop();
      }
      if (operator == 1) {
        answer = tempFirst / numCopy.pop();
      }
      if (operator == 2) {
        answer = tempFirst - numCopy.pop();
      }
      if (operator == 3) {
        answer = tempFirst + numCopy.pop();
      }
    } else {
      if (operator == 0) {
        answer *= numCopy.pop();
      }
      if (operator == 1) {
        answer /= numCopy.pop();
      }
      if (operator == 2) {
        answer -= numCopy.pop();
      }
      if (operator == 3) {
        answer += numCopy.pop();
      }
    }
  }

  if (answer < 0 || answer == 0 || answer - round(answer) != 0 || answer > 100) {
    createAnswer();
  }
}