

let imageSlide = document.getElementsByClassName("carousel-image")

for (i=0; i < imageSlide.length; i++) {
    imageSlide[i].style.display = "none"
}
imageSlide[0].style.display= "block"

let currentImage = 0

function next() {
    imageSlide[currentImage].style.display = "none"
    imageSlide[currentImage++].style.display = "block"
}