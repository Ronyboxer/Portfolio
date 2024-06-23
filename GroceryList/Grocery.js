function addItem(){
  //  console.log("ronak");
  const item = document.querySelector("#item").value;
  console.log(item);
  const para = document.createElement("p")
  para.innerHTML = `${item.value} <button class="Check" onclick="test()">✅</button>`
("#items-container").appendChild(para);
  

}
function clearItems(){
  const box = document.querySelector(".items-container")
  console.log(box);
  box.removeChild();
}
function test(e){
console.log(e);
}


// document.getElementByClassName("clear").addEventListener("click", displayDate);
// function displayDate(){
//     console.log("Testing");
// }