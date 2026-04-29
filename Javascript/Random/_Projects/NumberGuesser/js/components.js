export class NumberGuesser {
  #numberList;
  #selectedNumber;
  #count;

  constructor(arrowElement) {
    if (!arrowElement || !(arrowElement instanceof HTMLElement))
      throw new Error();
    this.#numberList = [];
    this.#count = 0;
    this.#selectedNumber = this.#getRandomNumber();
    this.arrowElement = arrowElement;
  }

  #getRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  statusType = {
    CORRECT: 1,
    MORE: 2,
    LESS: 3,
  };

  switchArrow(element, status) {
    if (!element || !(element instanceof HTMLElement)) throw new Error();
    if (this.#count === 7 && status !== this.statusType.CORRECT) {
      alert("Você perdeu!");
      window.location.reload();
      return;
    }
    if (status === this.statusType.MORE) {
      element.classList.remove("bg-red-400", "rotate-[180deg]", "top-16");
      element.classList.add("bg-green-400");
      return;
    }
    if (status === this.statusType.LESS) {
      element.classList.remove("bg-green-400");
      element.classList.add("bg-red-400", "rotate-[180deg]", "top-16");
      return;
    }
    if (status === this.statusType.CORRECT) {
      element.classList.remove("bg-green-400");
      element.classList.remove("bg-red-400", "rotate-[180deg]", "top-16");
      element.classList.add("bg-gray-400");
      alert("Acertou!");
      return;
    }
    return;
  }

  guessNumber(number) {
    this.#numberList.push(number);
    this.#count++
    
    if (number > this.#selectedNumber) {
      this.switchArrow(this.arrowElement, this.statusType.LESS);
      return;
    }
    if (number < this.#selectedNumber) {
      this.switchArrow(this.arrowElement, this.statusType.MORE);
      return;
    }
    if (number == this.#selectedNumber) {
      this.switchArrow(this.arrowElement, this.statusType.CORRECT);
      window.location.reload();
      return;
    }
    return;
  }

  get numberList() {
    return [...this.#numberList];
  }

  get count() {
    let getCount = this.#count;
    return getCount;
  }
}
