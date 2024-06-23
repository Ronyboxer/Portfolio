const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => calculation(event));
});

function clearInput() {
  const display = document.getElementById("display");
  display.value = "";
}

function appendToInput(buttonValue) {
  const display = document.getElementById("display");
  display.value += buttonValue;
}

function calculation(event) {
  const valueOnDisplay = event.target.textContent
  if(!isNaN(valueOnDisplay)){
    //button is a number
    appendToInput(valueOnDisplay);
  } else {
    if(valueOnDisplay == "C"){
      //button is C 
      clearInput()
    } else if(valueOnDisplay == "="){
      //button is = 
      calculate()
    } else if ("+-*/".includes(valueOnDisplay)){
      //button is either +, -, *, /
      appendToInput(valueOnDisplay);
    }
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
