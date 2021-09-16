function playIt(keyPressed){
    const audio = document.querySelector(`audio[data-key = "${keyPressed.keyCode}"]`);
    const key =  document.querySelector(`.key[data-key = "${keyPressed.keyCode}"]`)
    
    if(audio){
        audio.play()
        audio.currentTime = 0;
        key.classList.add("playing")
    }else{
        return
    }
}

function removeTransition(keyPressed){
    if(keyPressed.propertyName !== "transform") return
    this.classList.remove("playing");	
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playIt);
