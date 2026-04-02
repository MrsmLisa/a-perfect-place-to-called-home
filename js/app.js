
/* navbar burger */
function navbarBurger() {
    let navbarButton = document.getElementById("burger")
    /* Claude Ai done the window.get line to fix the problem with 
    having to press the buttons twice to make them work */
    let navbarNone = window.getComputedStyle(navbarButton).display
    
    if (navbarNone === "none") {
        navbarButton.style.display = "block"
    } else {
        navbarButton.style.display = "none"
    }
}


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

/* Dotts slide */
let dottSlide = document.getElementsByClassName("dotts")

for (i=0; i < dottSlide.length; i++) {
    dottSlide[i].style.color = "grey"
}
dottSlide[0].style.color = "black"

let currentDot = 0

/* Claude Ai done the bugging and added the % for these functions so it would wrap*/
function next() {
    imageSlide[currentImage].style.display = "none"
    currentImage = (currentImage + 1) % imageSlide.length;
    imageSlide[currentImage].style.display = "block"

    dottSlide[currentDot].style.color = "grey"
    currentDot = (currentDot + 1) % dottSlide.length;
    dottSlide[currentDot].style.color = "black"
}

function prev() {
    if(currentImage === 0){
        currentImage = imageSlide.length - 1
        return
    }
    imageSlide[currentImage].style.display = "none"
    currentImage = (currentImage - 1) % imageSlide.length;
    imageSlide[currentImage].style.display = "block"

    if(currentDot === 0){
        currentDot = dottSlide.length - 1
        return
    }
    dottSlide[currentDot].style.color = "grey"
    currentDot = (currentDot - 1) % dottSlide.length;
    dottSlide[currentDot].style.color = "black"
}


/* Author modal */

function authorModal() {
    let authorM = document.getElementById("author")
    let authorNone = window.getComputedStyle(authorM).display
    
    if (authorNone === "none") {
        authorM.style.display = "block"
    } else {
        authorM.style.display = "none"
    }
}

/* Quizz modal */

function quizzModal() {
    let quizzM = document.getElementById("quizz")
    let quizzNone = window.getComputedStyle(quizzM).display

    if (quizzNone === "none") {
        quizzM.style.display = "block"
    } else {
        quizzM.style.display = "none"
    }
}

/* Quizz */
/* Claude AI told me to put in the eventlistner as I had problem with the required input and the submitbutton */
function quizzAnswer(event){
    event.preventDefault()
let yesAnswer = document.getElementsByClassName("yes")
let answer = 0

for (i=0; i < yesAnswer.length; i++) {
   if (yesAnswer[i].checked === true) {
        answer++
   } 
}   
console.log(answer)
if (answer >=3) {
    alert("yes")
} else {
    alert("no")
}
return
}
document.getElementById("quizz-form").addEventListener("submit", quizzAnswer)

/* Contact modal */
function contactModal() {
    let contactM = document.getElementById("contact")
    let contactNone = window.getComputedStyle(contactM).display

    if (contactNone === "none") {
        contactM.style.display = "block"
    } else {
        contactM.style.display = "none"
    }
}


/* dotts

pick up all the dots 
for loop */ 
