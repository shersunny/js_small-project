let num1 = 8;
let num2 = 4;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el")
function add() {
    let sum1 = num1 + num2;
    sumEl.textContent = "Sum : " + sum1;
}
function subtract() {
    let sub1 = num1 - num2;
    sumEl.textContent = "Subtract : " + sub1 ;
}
function multiply() {
    let mup1 = num1*num2;
    sumEl.textContent = "Multiply : " + mup1;
}
function divide() {
    let div1 = num1/num2;
    sumEl.textContent = "Divide : " + div1;
}
