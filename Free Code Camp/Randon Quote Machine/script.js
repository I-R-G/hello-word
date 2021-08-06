const button = document.querySelector("#new-quote")
const quote = document.querySelector("#text")
const author = document.querySelector("#author")
const controls = document.querySelector(".buttons")
const url = "https://api.quotable.io/random"




function getQuote(){
    fetch(url).then(blob => blob.json())
    .then(data => {
        controls.style.transform = "translate(0px)"
        quote.textContent = `"${data.content}"`
        author.textContent = `-${data.author}`
    })    
}

button.addEventListener("click", getQuote)

