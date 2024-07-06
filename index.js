const projects = [
    "Bookmarks",
    "Bulb",
    "Calculator",
    "Color Changer",
    "Counter",
    "Instruments",
    "Table",
    "ToDo-list",
    "ArtGallery"
];
const sources = [
    "Bookmarks/Homework.html",
    "Bulb/Bulb.html" ,
    "Calculator/Calculator.html" ,
    "ColorChanger/index.html" ,
    "counter/counter.html" , 
    "Instruments/Instruments.html" , 
    "Table/Table.html" ,
    "ToDoList/toDo.html" ,
    "ArtGallery/Art.html"

]  

const descriptions = [
    "These Search function can help you find specific texts",
    "You can play with this bulb by turning it on and off" ,
    "Need help with your math homework? Use this tool to help caclulate your arithmetics" ,
    "A cool color changing feature that can change the background and text color of an article" ,
    "This tool can help you keep track of any measurement and count!" , 
    "With a click of a button you can play the sound of various different musical instruments" , 
    "Need help learning your times table? Use this table to help memorize quicker" ,
    "Need to keep track of your tasks? This to-do list will help keep you organized" ,
    "This website has an interface just like instagram (but with basketball players)"

]  

    projects.forEach((project , index) =>{
        const div = document.createElement("div")
        div.classList.add("card")
        div.style = "width : 18rem;"
        const url = `https://ronyboxer.github.io/Portfolio/${sources[index]}`
        div.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${project}</h5>
        <p class="card-text">${descriptions[index]}</p>
        <button type="button" class="btn btn-secondary"><a href="${url}"+ class="card-link"></a>Click</button>
      </div>
    </div>
       `
       document.querySelector(".projects").appendChild(div);
    })
    

