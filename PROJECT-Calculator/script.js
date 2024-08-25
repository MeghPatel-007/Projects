// Calculator Program
let button = document.querySelectorAll(".button");
let display = document.querySelector("#Display");
let AC = document.querySelector(".button");

// To see displayed values
const displayVal = (input) => {
  display.value += input;
  console.log(display.value.type);
};

// Ac button fn
const clearDisplay = () => {
  display.value = "";
};

// calculation fn
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    button.forEach((element) => {
      element.disabled = true;
      button[0].disabled = false;
    });
  }
};

// Ac btn fn to enable the disabled btns whenever an Error comes
const enabler = () => {
  button.forEach((element) => {
    element.disabled = false;
  });
};

// +/- btn fn
const Neg = () => {
  display.value = `-${display.value}`;
};
