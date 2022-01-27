btns = document.querySelectorAll(".drum");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let buttonTextContent = this.textContent;
        playMusic(buttonTextContent);
        buttonAnimation(buttonTextContent);
    })
}

document.addEventListener("keypress", function(event) {
    playMusic(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
})



function playMusic(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let sanre = new Audio("sounds/snare.mp3");
            sanre.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    try {
        activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    } catch (e) {
        console.log("button Animation function output: " + currentKey);
    }

}