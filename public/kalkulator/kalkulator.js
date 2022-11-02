
class Calculator{
    constructor(previousOperandtextElemenmt, currentOperandtextElemenmt){
        this.previousOperandtextElemenmt = previousOperandtextElemenmt
        this.currentOperandtextElemenmt = currentOperandtextElemenmt
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
    }
    compute(){
let comoutation
const prev = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)
if(isNaN(prev)|| isNaN(current)) return
switch(this.operation){
    case "+":
        comoutation = prev + current
        break
            case "-":
            comoutation = prev - current
            break
                case "*":
                comoutation = prev * current
                break
                    case "÷":
                    comoutation = prev / current
                    break
default:
    return
}
this.currentOperand = comoutation
this.operation = undefined
this.previousOperand = ''
 }

getdisplayNumber(number){
    const stringnumber = number.toString();
    const intigerDigits = parseFloat(stringnumber.split('.')[0]);
    const decimalDigits = stringnumber.split('.')[1];
    // const floatnumber = parseFloat(number)
    // if(isNaN(floatnumber)) return ''
    // return floatnumber.toLocaleString('en')
    let intigerDisplay
    if (isNaN(intigerDigits)){
        intigerDisplay= ''
    } else {
        intigerDisplay = intigerDigits.toLocaleString('en',{
            maximumFractionDigits: 0
        })
    }
    if(decimalDigits != null){
        return `${intigerDisplay}.${decimalDigits}`
    }else{
        return intigerDisplay
    }
}




updateDisplay(){
        this.currentOperandtextElemenmt.innerText = this.getdisplayNumber(this.currentOperand)

        if(this.operation != null){

            this.previousOperandtextElemenmt.innerText = `${this.getdisplayNumber(this.previousOperand)}     ${this.operation}`
        } else {
            this.previousOperandtextElemenmt.innerText = ''
        }
    //this.previousOperandtextElemenmt.innerText = this.previousOperand
    } 
}




const numberButtons = document.querySelectorAll('[data-number]');
const operationsbuttons = document.querySelectorAll('[data-operation]');
console.log(operationsbuttons)
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
console.log(allClearButton)
const previousOperandtextElemenmt = document.querySelector('[data-previus-operend]');
const currentOperandtextElemenmt = document.querySelector('[data-current-operend]');


const calculator = new Calculator(previousOperandtextElemenmt, currentOperandtextElemenmt)


numberButtons.forEach(button =>{
    button.addEventListener("click", function () {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        
    })
})


operationsbuttons.forEach(button =>{
    button.addEventListener("click", function () {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        
    })
})


equalsButton.addEventListener("click",function () {
    calculator.compute()
    calculator.updateDisplay()

    
})

allClearButton.addEventListener("click",function () {
    calculator.clear()
    calculator.updateDisplay()

    
})

deleteButton.addEventListener("click",function () {
    calculator.delete()
    calculator.updateDisplay()

    
})
