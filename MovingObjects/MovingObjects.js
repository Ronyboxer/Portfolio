let character = document.getElementById('animated_charater');

window.addEventListener('keydown', evt => {
    switch(evt.key) {
        case 'ArrowUp':
            console.log("UP");
            character.style.backgroundColor = "red";
            character.style.top = (parseInt(character.style.top) - 20) + 'px';
            break;
        case 'ArrowDown':
            console.log("DOWN");
            character.style.backgroundColor = "blue"; // Resetting the color
            character.style.top = (parseInt(character.style.top) + 20) + 'px';
            break;
    }
});

