const inputs = document.querySelectorAll("input#text");
inputs.forEach((input) => {
  input.addEventListener("click", () => changeColor(input));
});
function changeColor(input) {
  const textColor = input.value;
  const hobbies = document.querySelectorAll("p");
  hobbies.forEach((p) => {
    p.style.color = textColor;
  });
}
const radioButtons = document.querySelectorAll("input#bg");
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", () =>
    changeBackgroundColor(radioButton)
  );
});
function changeBackgroundColor(radioButton) {
  const backgroundColor = radioButton.value;
  document.querySelector("#right").style.backgroundColor = backgroundColor;
}
