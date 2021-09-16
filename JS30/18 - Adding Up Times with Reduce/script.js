const timeNode = [...document.querySelectorAll("[data-time]")]

const seconds = timeNode
.map(node => node.dataset.time)
.map(time => {
   const [min, seconds] = time.split(":").map(parseFloat)
   return ((min * 60) + seconds)
})
.reduce((sum, sec) => sum + sec ,0)

let secondsLeft = seconds

const hours = Math.floor(seconds / 3600)
secondsLeft -= (hours * 3600)

const minutes = Math.floor(secondsLeft / 60)
secondsLeft -= (minutes * 60)

console.log(hours, minutes, secondsLeft)




