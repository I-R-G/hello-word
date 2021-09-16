
const bands =  ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
                'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(name){
    let regex = /^(a |the |an )/i
    return name.replace(regex, "").trim()
}

const inOrder = bands.map(band => removeArticle(band)).sort((a,b) => a > b ? 1 : -1)

const list = document.querySelector("#bands")

list.innerHTML = inOrder.map(band => `<li>${band}</li>`).join("")


