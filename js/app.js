
/* Read me buttons move down to carousel */

function readMe() {
    let scrollDown = document.getElementById("carousel")
    scrollDown.scrollIntoView(true)
}

/* carousel*/
let imageSlide = document.getElementsByClassName("carousel-image")

for (i=0; i < imageSlide.length; i++) {
    imageSlide[i].style.display = "none"
}
imageSlide[0].style.display= "block"

let currentImage = 0

function next() {
    imageSlide[currentImage].style.display = "none"
    currentImage = (currentImage + 1) % imageSlide.length;
    imageSlide[currentImage].style.display = "block"
}

/* Claude Ai done the bugging and added the % for this function*/
function prev() {
    if(currentImage === 0){
        currentImage = imageSlide.length - 1
        return
    }
    imageSlide[currentImage].style.display = "none"
    currentImage = (currentImage - 1) % imageSlide.length;
    imageSlide[currentImage].style.display = "block"
}

/* Author modal */

function authorModal() {
    let authorM = document.getElementById("author")
    
    if (authorM.style.display === "none") {
        authorM.style.display = "block"
    } else {
        authorM.style.display = "none"
    }
}

/* Quizz */
function quizzAnswer(){
let yesAnswer = document.getElementsByClassName("yes")

for (i=0; i < yesAnswer.length; i <= 3) {
    if (yesAnswer) {
        alert("yes")
    } else {
        alert("no")
    }
}   
}

