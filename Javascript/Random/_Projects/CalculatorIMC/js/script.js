import { CalculatorIMC } from "./components.js";

const calcNumberIMC = document.getElementById("calc-number-imc");
const btnCalc = document.getElementById("calc-button");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calcText = document.getElementById("calc-text");

const calculator = new CalculatorIMC(heightInput.value);

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  if (!heightInput.value || !weightInput.value) return;

  const { meta, result } = calculator.calculate(
    heightInput.value,
    weightInput.value
  );

  calcNumberIMC.classList.remove("text-slate-900", "text-red-300");
  calcNumberIMC.classList.add(meta.class);
  calcNumberIMC.textContent = result.toFixed(4);
  calcText.textContent = meta.text;
});
