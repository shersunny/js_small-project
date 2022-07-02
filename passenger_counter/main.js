// // document.getElementById("change").innerText = 7;

let countEl = document.getElementById("change");
let saveEl = document.getElementById("count-el");


console.log(countEl);

let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
   
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  

}
