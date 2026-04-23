# 5 Testing

## User stories testing

I want to be able to find information quickly and without problem.
 * The title of the book and the information text is the first thing the user is faced with when opening the site. 
The three bars in the corner indicates where more information can be found. 
The button that says *Read a sample* shows what more the user can expect to find on the page.

 
I want user-friendly design that works on different devises.
The header and the footer images all move according to the size of the screen. 
The modals all change size depending on the size of the device.
* The carousel changes size and go from row to column to be able to have the comic images as large as possible on all devises.


 I want high quality images and engaging illustrations.
The images are the most important thing as Julia is a illustrator and this can be used to send to future clients. 
There are many illustrations on the site that have all Benn resized and. Compressed for the best viewing experience for the user.


I want to be able to read a sample of the comic.
* There is a fully functional carousel with 14 images as a sample for the user to read.

 
I want an easy way to get in contact with the author.
* There are several ways to contact the author on the site. There is the contact form that the user can get to from the navbar and the buttons under the carousel. There are also links to Julias website and her social media on several locations.

## Feature testing
### Navbar
Ensure that it is always visible on all devises.
Ensure that it opens when the icon is clicked and closes automatically when the user had clicked on one of the links.

### Carousel
Ensure that the images are in a row except for the 320px viewpoint where it goes to a column.
Ensure the forward and previous button works in a loop both ways.
Ensure that the dot indicators follow along with the forward and previous buttons.

### Modals 
Ensure the Modal works no matter where the user is on the website.
Ensure the Modal is displayed centrally, and the background is appropriately dimmed.
Ensure the Modal has a header, body text, and a close button.
Ensure the close button closes the Modal.
Ensure all links work, and open in a separate browser window.
Ensure all content in the Modal fits appropriately within the Modal, and is legible.

### Responsive layout and design
Ensure all Features function correctly from at least 320px wide.

## Browser testing
the different browsers tested

## Code validation

## Lighthouse
I have used Lighthouse in dev tools to test the performance, accessibility and best practices. The first time I had a 72 on performance, 99 on accessibility and 100 for best practices. The problem was the size of the images that I first resized in Photoshop and then compressed using FreeConvert. The new score is:
For desktop:

<img width="452" height="188" alt="desktop" src="https://github.com/user-attachments/assets/2751a97e-a334-43a6-93c0-af3e2cf61708" />

For mobile

<img width="454" height="186" alt="mobil" src="https://github.com/user-attachments/assets/6277d20c-e3ee-4e9c-9aa5-f192fd101f79" />


## Validation
W3C HTML results:

<img width="513" height="133" alt="html-validator" src="https://github.com/user-attachments/assets/51365418-f6aa-40cd-92a5-752865f08507" />

W3C CSS results:

<img width="669" height="169" alt="css-validering" src="https://github.com/user-attachments/assets/babe2e25-94bc-47be-bc10-638f36931159" />


# Significant bugs

When I put in the carousel code in JS the forward buttons worked until I reached the end of the images and then the images disapeared complitely.  

<img width="319" height="298" alt="comicbug" src="https://github.com/user-attachments/assets/b594448c-fa7c-494a-93ac-3a478bd67b14" />

With the help of Claude AI I put in a % so the carousel keeps going around.

<img width="475" height="125" alt="bugslide" src="https://github.com/user-attachments/assets/b3594b2f-d213-48d8-9627-2781d4b8a0cb" />


After I finished the modals I needed to add no scroll and an overlay on the background when the modal is open. When looking for a way to do this I found a code that would solve all this and the pop-up of the modals with a nicer code. 

The old code:

<img width="475" height="206" alt="older-jscode" src="https://github.com/user-attachments/assets/99660843-0044-46cd-8bca-4085358cad2f" />


The new code 

<img width="528" height="327" alt="new-code" src="https://github.com/user-attachments/assets/7a78caa1-67e0-4509-9adc-4ee80476c90a" />


Website where the code was found.
[wowoptin.com](https://wowoptin.com/disable-background-scrolling-when-popup-modal-is-open/)

I used Claude AI to help me when I had a problem with the input and the submit button in the quiz. 


<img width="637" height="115" alt="eventlistner" src="https://github.com/user-attachments/assets/930178ff-ac1b-4c5a-9d08-49138fe31450" />


I had the problem that all buttons had to be pressed twice to work. Claude AI told me to put in the window.getComputedStyle to fix the problem.

<img width="522" height="250" alt="navbar-bug" src="https://github.com/user-attachments/assets/8960c74b-5d37-4146-99e9-caef3a9dec8b" />



