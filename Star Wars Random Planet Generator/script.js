const button = document.querySelector("button")
const information = document.querySelector(".information")

function cleanStr (str){
    let regex = /_+/gi
    return str.replace(str.match(regex), " ")
}

function getPlanet(){
    
    button.textContent = "Loading ..."
    const randomID = Math.floor(Math.random() * (60 -1 + 1) + 1) 
    const target = "https://swapi.dev/api/planets/" + randomID + "/?format=json"

    fetch(target).then(blob => blob.json())
    .then(data => {

        const keys = Object.keys(data)
        const html = keys.map(key =>{

            return `<li><span class = "info-list">${cleanStr(key)} : ${data[key]}</span></li>`
        })

        information.innerHTML = html
        button.textContent = "Click here to see planet info!"
    })
}

button.addEventListener("click", getPlanet);