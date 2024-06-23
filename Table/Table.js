// let finalNumbers = [];
// function printTable(event){
//     event.preventDefault();
//     const userNumber = event.target.querySelector('[name="userNumber"]').value;
//     for (let n = 1; n<=10; n=n+1){
//         finalNumbers.push(userNumber*n)
//     }
//     document.querySelector("#table").innerHTML=finalNumbers
//     return true
// }


const numbers = [1,2,3,4,5,6,7,8,9,10];
function otherName() {
    var input = document.getElementById("userInput").value;
    numbers.forEach((element, index) => {
                document.getElementById("table"+index).innerHTML = numbers[index]*input;
                console.log(element);
            })
}
    
    
