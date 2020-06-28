var num1Text = document.getElementById("num1Text");
var num2Text = document.getElementById("num2Text");
var result = document.getElementById("result");
var num1, num2;
function getData() {
  if (!num1Text.value || !num2Text.value) {
    alert("please enter the two numbers");
  } else {
    num1 = parseFloat(num1Text.value);
    num2 = parseFloat(num2Text.value);
  }
}

function add() {
  getData();
  if (num1Text.value && num2Text.value) {
    result.innerText = "Result: " + (num1 + num2);
  }
}

function subtract() {
  getData();
  if (num1Text.value && num2Text.value) {
    result.innerText = "Result: " + (num1 - num2);
  }
}

function multiply() {
  getData();
  if (num1Text.value && num2Text.value) {
    result.innerText = "Result: " + (num1 * num2);
  }
}

function divide() {
  getData();
  if (num2 === 0) {
    alert("you can't divide by zero");
  } else if (num1Text.value && num2Text.value) {
    result.innerText = "Result: " + (num1 / num2);
  }
  
}

//num1Text.value = 3;
//var num1 = parseFloat(num1Text.value);





