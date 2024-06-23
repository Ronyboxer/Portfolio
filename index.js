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

    projects.forEach((project , index) =>{
        const div = document.createElement("div")
        div.classList.add("card")
        div.style = "width : 18rem;"
        
        div.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${project}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="${sources[index]}" class="card-link">link</a>
      </div>
    </div>
       `
       document.querySelector(".projects").appendChild(div);
    })
    

