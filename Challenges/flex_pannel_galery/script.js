const panels = document.querySelectorAll(".panel")
		
function handleOpen(e){
	this.classList.toggle("open")	
}

function handleOpenActive(e){
	if(e.propertyName === "flex-grow"){
		this.classList.toggle("open-active")
	}	
}
		
panels.forEach(element => element.addEventListener("click",handleOpen));
panels.forEach(element => element.addEventListener("transitionend",handleOpenActive));