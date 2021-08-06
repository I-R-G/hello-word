const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const clear = document.querySelector("#clear")
const operators = document.querySelectorAll(".operator")

const displayer = display.textContent

function showNumbers(){
    const pressedNum = this.textContent 
    if(display.textContent.length > 16){
        display.textContent = "Digit limit exceeded"
    }else{
        display.textContent = display.textContent.concat(pressedNum)
    } 
}


numbers.forEach(number => number.addEventListener("click", showNumbers))
clear.addEventListener("click",() => display.textContent = "")