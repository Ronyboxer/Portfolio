var modal = document.getElementById("myModal");

var btn = document.getElementById("add");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function display() {
  const task = document.getElementById("task").value;
  const dDate = document.getElementById("date").value;
  const entry = document.createElement("div");
  entry.className = "entry";
  entry.innerHTML = `<span>${task}</span><span>${dDate}</span><button>Remove</button>`;
  document.querySelector(".to-do-list").appendChild(entry);
  modal.style.display = "none";

  // Adding event listener to remove button functionality
  entry.querySelector("button").addEventListener("click", () => removeFunctionality(entry))
}

function clearItems() {
  // using for Each method (moving entries from #toDo to #done)
  const entries = document.querySelectorAll(".entry");
  entries.forEach((entry) => {
    document.querySelector("#done").appendChild(entry);
  });

  const taskContainer = document.querySelector(".to-do-list");
  taskContainer.remove();
  const emptyContainer = document.createElement("div");
  emptyContainer.className = "to-do-list";
  document.querySelector("#notDone").appendChild(emptyContainer);
}

function removeFunctionality(entry) {
  // Remove the entry from the To Do's list
  entry.parentNode.removeChild(entry);

  // Append the removed entry to the Done list
  document.querySelector("#done").appendChild(entry);
}

