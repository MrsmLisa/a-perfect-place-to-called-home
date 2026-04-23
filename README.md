
<img width="702" height="328" alt="unserstory2 1" src="https://github.com/user-attachments/assets/ba3f67a4-163d-4aad-9064-ed4f4298ced9" />


# 1 Overview
## A perfect place to call home
Julia Nascimento is a Brazilian illustrator and comic artist. **A Perfect Place to Call Home** is Julia Nascimento’s first collection of visual narratives about her experiences and reflections of life in different places as a foreigner. The site provides information about the book and Julia, a sample of the book that the viewer can read and a contact form to get in touch with Julia.

# 2 UX
## Strategy
### User stories
As a first-time visitor:
 * I want to be able to find information quickly and without problem.
 * I want user-friendly design that works on different devises.
 * I want high quality images and engaging illustrations.
 * I want to be able to read a sample of the comic.
 * I want an easy way to get in contact with the author.

### Project goal
Provide a platform for Julia to be able to spread her work to a larger audiens. The site needs to be inviting and informative as well as user friendly and easy to understand. 

### Project objectives
To create a inviting website that users wants to come back to multiple times.
To show off the illustrations and comics.
To engage the user.
To allow the user to navigate and control the website with ease.
	

## Scope
### Functional requirements
Implement a navigation system that is consistent in style and structure that works over different devices.
put a lot of emphasis om the imagery without losing the main purpose of the site.
Make sure that the navigation does not disappear in the imagery.


## Structure
The website uses a single page with the content being navigated by either buttons or scrolling. 

* As the imagery is a big part of the site it was considered that moving from page to page would interrupt the flow. It was decided that using modals would be better and also a way to demonstrate additional JavaScript capabilities.

### Overall view
When the site is first open it looks as the cover of the book with the imagery and book title. When the user moves down the page the footer stays fixed at the bottom of the page to simulate that the user is moving into the book and when the footer stops it is the end.

Navigation bars it was decided that because the use of the page image at the top of the page a full navbar would be to intrusive. The three bars is the standard use when a site have a collapsible full navbar so that is something users would understand is a way to navigate the page.   
When clicked it opens a small container with links to the different moduls. When one of the links, or the three bars, are clicked the container disappears.

### Information section
This is the landing page with the title and a short description what the project is about. It contains a button that takes the user to the comic sample. 

### Carousel
There are two images side to side per carousel-page, if viewed on a small device the images moves to a column to be able to make the images as large as possible. To read all the carousel-pages the user navigates with the arrow buttons at the bottom of the carousel. So the user knows where they are in the comic there are small dots just above the arrows that changes opacity as the carousel moves.

### Modals
All the modals have the same background color as the main site. As the modals open the main site goes dark and it won’t scroll as to not take away the focus of the modal.

### About the author
The modal provides information about the author . There are icons to move the user to Instagram, Facebook, the authors own website and the website where the book is for sale.

### Quiz
The quiz was created so that the users can feel a connection with the author, but also a way to use more JavaScript for the examination. All the questions require one yes or no answer to be able to submit. Depending on if you should or should not move abroad a new smaller modal pops up with the answer as the quiz modal closes. 

### Contact
There are fields to fill in the users name, email and a message. All the fields need to be filled in for the user to be able to submit the message. At the bottom are icons so the user can move to Instagram, Facebook, the authors website and the website where the book is for sale.

### Buttons
Expert for showing of the comic sample, one of the main objectives is for the user to be able to get information about and contact the author. The user can reach all the modals from the links in the navbar and the buttons below the carousel.


## Skeleton
I have used [Whimsical](https://whimsical.com/) to build the wireframes for the site.

<img width="600" height="483" alt="wireframe1" src="https://github.com/user-attachments/assets/664612de-fae8-44d7-bd5c-6720bb5c6c22" />

<img width="446" height="275" alt="wireframe2" src="https://github.com/user-attachments/assets/ed3de1ff-9e4e-4ece-b12e-801560c63322" />


## Surface
### Color scheme
As the imagery is the main focus for the site there are very few colors used. 

The color green used as background for all of the site and the modals is taken from the cover of the book from the grass section.

<img width="150" height="207" alt="green" src="https://github.com/user-attachments/assets/4aab4fc7-f80a-4121-a1eb-3d4c820bf256" />


<img width="350" height="395" alt="green-colortest" src="https://github.com/user-attachments/assets/bbe3f02c-e0bb-4008-9cf8-c530c59dc1a4" />


The blue used on the buttons are taken from the trees in the foreground. The blue is dark enough to stand out from the green but as they both exist in the original cover it all feels cohesive. 

<img width="150" height="209" alt="blue" src="https://github.com/user-attachments/assets/a06373da-b6be-403f-a51c-a02f1058c9e0" />

<img width="350" height="392" alt="blue-colortest" src="https://github.com/user-attachments/assets/c5b58c5d-03cb-460f-9856-9d087442e567" />



White is used for all the text. 

### Typography 
The font Roboto has been used for all the text on the site. Originally the font Quicksand was used for the text and Roboto for the headers but the Quicksand was to thin for the white text to show properly.   

<img width="816" height="160" alt="fonts" src="https://github.com/user-attachments/assets/bbca8221-ff3d-4c7d-8fbf-56504807c931" />


# 3 features
## Existing feature
### Responsive layout and design
For the project design to be fully compatible and interactive on all screen types and sizes CSS flex box has been used to maximize the the functionality. The project works between 320px to 1440px wide screens sizes.

<img width="450" height="299" alt="different-screens" src="https://github.com/user-attachments/assets/c98cb0f5-eba2-45f0-b297-84cbc1bebc65" />


### Accessibility
The aim while designing the webistes is to make it as accessible and user friendly as possible. To achieve this the following has been done:

 * Semantic HTML - for this I have used the [Contrast Checker](https://webaim.org/resources/contrastchecker/) to make sure all my text is visable.
 * I have used the [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) to make sure the visuals on the page has enough contrast.
 * Aria-labels have been used when possible.

### Future features
As the novel is made of many different stories there could be more then one carousel on the page to show the authors different styles. 
 

# 4 Technologies used
## Laguages used
HTML  
CSS  
JavaScript  

## Framework, libraries and programs used

* Git  - for version control and deployment
* GitHub - used to save files
* [Whimsical](https://whimsical.com/) - used for the wireframe
* [Google Fonts](https://fonts.google.com/) - used for all the fonts on the site
* [Font Awesome](https://fontawesome.com/) - used for the ”burger”, arrows and dots on the carousel and social media logos
* [Faveicon](https://favicon.io/favicon-generator/) - used to make a favicon
* Chrome dev tools - to test the website and make sure it is all responsive
* [Claude AI](https://claude.ai/new) - has helped with some of the bugs with code, clearly stated in the code. I have used it in Socratic mode and asked it not to give me any code so I would learn as much as possible.
* [Google Fonts](https://fonts.google.com/) - used for all the fonts
* [Freepik](https://www.freepik.com/) - used for images and drawings  
* [Free Convert](https://www.freeconvert.com/compress-png) - to convert and compress the images.  
* [Merge Images](https://mergeimages.net/) - to convert and compress the images.  
* [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet) - to help with the read me.   
* [validator](https://validator.w3.org/nu/#textarea) - to check the HTML.  
* [W3C](https://jigsaw.w3.org/css-validator/) - to check the CSS.  
* [autoprefixer](https://autoprefixer.github.io/) - to add vendor prefixes to CSS.  


# 6 Deployment

**The website is deployed using GitHub Pages.**

 1. Login to GitHub
 2. Go to the repository for this project - [A perfect place to call home](https://github.com/MrsmLisa/a-perfect-place-to-called-home)
 3. Go to the settings
 4. Select pages in the left hand menu
 5. Make sure that the source dropdown is on ”Deploy from branch” and the Branch is selected main and then press save.
 6. The site has been deployed and after a few minutes and a link can be found in the deployment section.

**Local deployment**

 1. Go to the repository for this project - [A perfect place to call home](https://github.com/MrsmLisa/a-perfect-place-to-called-home)
 2. Click on the Code button and copy the URL (HTTPS).
 3. Open your terminal or command prompt.
 4. Clone the repository.


# 7 Credits
## Content
All images and texts are taken from Julia Nascimentos book A perfect place to call home or marketing material for the book. 
The quiz is written by me.

## Code
To create the JavaScript code for the different segments I spent time looking at other sites and playing around. Below I have listed the pages that I ended up using code from. 

### Modals
[geeksforgeeks](https://www.geeksforgeeks.org/javascript/how-to-create-a-modal-box-using-html-css-and-javascript/)  
[serhanmertozel](https://serhanmertozel.medium.com/building-a-simple-modal-popup-with-javascript-a-beginners-guide-859243330e5b)  
[w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)

New code for modals (see under significant bugs in testing).
[wowoptin](https://wowoptin.com/disable-background-scrolling-when-popup-modal-is-open/)

### Carousel
[w3schools](https://www.w3schools.com/howto/howto_js_slideshow.asp)  
[geeksforgeeks](https://www.geeksforgeeks.org/html/building-a-carousel-with-vanilla-javascript/)

### Quiz
[sitepoint](https://www.sitepoint.com/simple-javascript-quiz/)



# 8 Acknowledgement
Julia Nascimento - for the use of her beautiful book.  
Tindy Chan - for all the support and suggestions during the build.  
Benjamin Kavanagh - for the mentorship and the aha moments.  
Geraldine - for introdusing me to the Socratic mode in AI.  
And for my husband and son for the support and love.  
