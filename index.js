class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
     this.currentOperand = ''
     this.previousOperand = ''
     this.operation = undefined
  }

  detele() {

  }

  appendNumber(number) {
      this.currentOperand = number
  }

  chooseOparetion(operation) {

  }

  compute() {

  }

  updateDisplay() {
     this.currentOperandTextElement.innerText = this.currentOperand
  }



}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deteleButtons = document.querySelector('[data-detele]')
const allclearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operation]')
const currentOperandTextElement = document.querySelector('[data-current-operation]')

const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => 
   {button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
   } )
})