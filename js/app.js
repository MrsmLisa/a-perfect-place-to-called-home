
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

const authorOpen = document.getElementById("openAuthor");
const authorOpenButton = document.getElementById("openAuthorButton");
const authorClose = document.getElementById("closeAuthor");
const authorPop = document.getElementById("author");

authorOpen.addEventListener("click", () => {
    authorPop.style.display = "block";
    document.body.classList.add("noscroll");
});
authorOpenButton.addEventListener("click", () => {
    authorPop.style.display = "block";
    document.body.classList.add("noscroll");
});
authorClose.addEventListener("click", () => {
    authorPop.style.display = "none";
    document.body.classList.remove("noscroll");
});


/* Quizz modal */

const quizzOpen = document.getElementById("openQuizz");
const quizzOpenButton = document.getElementById("openQuizzButton");
const quizzClose = document.getElementById("closeQuizz");
const quizzPop = document.getElementById("quizz");

quizzOpen.addEventListener("click", () => {
    quizzPop.style.display = "block";
    document.body.classList.add("noscroll");
});
quizzOpenButton.addEventListener("click", () => {
    quizzPop.style.display = "block";
    document.body.classList.add("noscroll");
});
quizzClose.addEventListener("click", () => {
    quizzPop.style.display = "none";
    document.body.classList.remove("noscroll");
});


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
    alert("You should move to another contry, go for it!")
} else {
    alert("You should stay in your own contry, moving is annoying anyway.")
}
return
}
document.getElementById("quizz-form").addEventListener("submit", quizzAnswer)

/* Contact modal */
const contactOpen = document.getElementById("openContact");
const contactOpenButton = document.getElementById("openContactButton");
const contactClose = document.getElementById("closeContact");
const contactPop = document.getElementById("contact");

contactOpen.addEventListener("click", () => {
    contactPop.style.display = "block";
    document.body.classList.add("noscroll");
});
contactOpenButton.addEventListener("click", () => {
    contactPop.style.display = "block";
    document.body.classList.add("noscroll");
});
contactClose.addEventListener("click", () => {
    contactPop.style.display = "none";
    document.body.classList.remove("noscroll");
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const nameErr = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailErr = document.getElementById("emailError");
const messageInput = document.getElementById("message");
const messageErr = document.getElementById("messageError");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    nameErr.style.display = "none";
    const name1 = nameInput.value;

    let valid1 = name1==="";
    if (valid1 === true) {
        nameErr.style.display = "block"
        return
    };

    emailErr.style.display ="none"
    const email = emailInput.value;

    let valid2 = email==="";
    if (valid2 === true) {
        emailErr.style.display = "block"
        return
    };

    messageErr.style.display = "none";
    const message = messageInput.value;

    let valid3 = message==="";
    if (valid3 === true) {
        messageErr.style.display = "block"
        return
    }
        
});


/* contact button 
function contactButton(event) {
    event.preventDefault()
    alert("Your message has been sent.")
}
document.getElementById("contactForm").addEventListener("submit", contactButton)*/

