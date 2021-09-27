const numbers = document.querySelectorAll(".number")
console.log(numbers)

numbers.forEach((number) => {
    console.log(number)

    number.addEventListener("click", () => {
        console.log("number is pressed")
    })

    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculatorOperator =''
let currentNumber ='0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculatorOperator === '') {
        prevNumber = currentNumber
    }
    calculatorOperator = operator 
    currentNumber = ''

}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
    calculate ()
    updateScreen(currentNumber)
})

const  calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
            default:
                return
    }
    currentNumber = result
    calculatorOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
    clearAll ()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculatorOperator =''
    currentNumber ='0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    currentNumber += dot
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

