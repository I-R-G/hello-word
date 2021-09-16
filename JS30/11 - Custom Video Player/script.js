 // Constants declarations

 const player = document.querySelector(".player");
 const video = document.querySelector(".viewer");
 const progress = document.querySelector(".progress");
 const progressBar = document.querySelector(".progress__filled");
 const toggle = document.querySelector(".toggle");
 const skipButtons = document.querySelectorAll("[data-skip]");
 const ranges = document.querySelectorAll(".player__slider");

 // Functions

 //Play or Pause the video.
 function togglePlay(){
     video.paused ? video.play() : video.pause();
 };

 //Change the play button icon
 function updateButton(){
     video.paused ? toggle.textContent = "►" : toggle.textContent = "❚ ❚";
 };
 
 //Skip 10 seconds backwards or 25 seconds foward
 function skip(){
     video.currentTime += parseInt(this.dataset.skip)
 }

 //Control the volume and playback rate changes
 let shallUpdate = false

 function handleRangeUpdate (){
     if(shallUpdate){
         video[this.name] = this.value;
     }
 }
 //Control the grown of the progress bar ... Set interval makes the function rum every half second.
 function handleProgress(){
     const percent = (video.currentTime/video.duration) * 100;
     progressBar.style.flexBasis = `${percent}%`;
 }
 
 //Foward or reward the video to the point the user clicks or drag to in the progress bar
 function setDesiredTime(e){
     const percent = e.offsetX / progress.offsetWidth
     video.currentTime = video.duration * percent;  
 }


 //Event Listeners

 // If you click anywhere in the viewer or the play button will fire the (play or pause function);
 toggle.addEventListener("click", togglePlay)
 video.addEventListener("click", togglePlay)

 // Whenever the video is playing or paused fires the (updateButton function)
 video.addEventListener("play", updateButton)
 video.addEventListener("pause", updateButton)

 //When clicking any of the skip buttons fire the (skip function)
 skipButtons.forEach(button => button.addEventListener("click", skip))

 //When clicking the mouse down on the ranges and moving then starts running the (handleRangeUpdate function);
 ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate))
 ranges.forEach(range => range.addEventListener("mouseup", ()=> shallUpdate = false ))
 ranges.forEach(range => range.addEventListener("mousedown", ()=> shallUpdate = true))

 //When video currentTime is updated it fires the (handleProgress function)
 video.addEventListener("timeupdate", handleProgress);

 //When the user click or drag the progress bar fires the (setDesiredTime function)
 let mouseDown = false
 progress.addEventListener("click", setDesiredTime)
 progress.addEventListener("mousemove", (e) => mouseDown && setDesiredTime(e))
 progress.addEventListener("mousedown", () => mouseDown = true)
 progress.addEventListener("mouseup", () => mouseDown = false)