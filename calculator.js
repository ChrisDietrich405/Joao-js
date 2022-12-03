const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const solution = document.getElementById("solution");
const mathSignInput = document.getElementById("select-math-sign");
const calcBtn = document.getElementById("calculate");

const mathFunc = (mathResult) => {
  solution.textContent = mathResult;
};

const callbackMathSolution = () => {
  switch (mathSignInput.value) {
    case "add":
      return mathFunc(parseInt(num1.value) + parseInt(num2.value));
    case "subtract":
      return mathFunc(parseInt(num1.value) - parseInt(num2.value));
    case "multiply":
      return mathFunc(parseInt(num1.value) * parseInt(num2.value));
    default:
      return 0;
  }
};

calcBtn.addEventListener("click", callbackMathSolution);

// const addNumbers = () => {
//    return parseInt(num1.value) + parseInt(num2.value)
// }

// const mathSolution = () => {
//     console.log(addNumbers())
//     solution.textContent = addNumbers()
// }

// add.addEventListener("click", mathSolution)
