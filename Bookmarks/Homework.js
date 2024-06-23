const bookmarks = [
    "Aesthetic inspiration!",
    "Fun quizzes with friends!",
    "Catch up with the news!",
    "All makeup products!",
    "The best TV shows!",
    "Animal education",
    "The cutest puppies!",
    "Shop all home and food essentials!",
    "Catch up with all good movies!",
    "Our very own IYA!",
    "Catch up with the news!",
    "Get idea inspiration and knowledge!",
    "Web design",
    "AI imagery generator",
    "Organise your work with mindmaps!",
    "Catch up with the news!",
    "Catch up with the news!",
    "Make team work easier!",
    "Vegan Recipes!",
    "Latest fashion!",
];
const addToUI = (bookmarks) => {
    bookmarks.forEach((bookmark) => {
        const p = document.createElement("p")
        p.innerHTML = bookmark;
        document.querySelector("#main").appendChild(p);
    })
}
addToUI(bookmarks)

function inputValue(){
     const input = document.getElementById("text").value;
     const filteredBookmarks = bookmarks.filter((bookmark) =>{
        if(bookmark.includes(input)){
            return true
        }
        return false
    })
    document.querySelector("#main").innerHTML = ""
    addToUI(filteredBookmarks)
}


