import { NumberGuesser } from "./components.js";

const actualNumber = document.getElementById("actual-number");
const statusArrow = document.getElementById("status-arrow");
const numberList = document.getElementById("number-list");
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const count = document.getElementById("count");

const numberGuesser = new NumberGuesser(statusArrow);


addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!taskInput.value) {
    alert("Deve ser colocado um número!");
    return;
  }
  numberGuesser.guessNumber(taskInput.value);
  actualNumber.textContent = numberGuesser.numberList[numberGuesser.numberList.length - 1]
  taskInput.value = "";
  count.innerText = 'Tentativas: ' + numberGuesser.count;
  numberList.innerHTML = ''
  numberGuesser.numberList.forEach(number => {
    const li = document.createElement('li')
    li.textContent = number
    li.classList.add(
      "bg-blue-500",  
      "text-white",   
      "p-2",         
      "rounded",   
      "shadow-md",    
      "mb-2",        
      "text-center" ,
      'w-16',
      'max-w-16'  
    );
    numberList.appendChild(li)
  })
});
