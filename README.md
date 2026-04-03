# A perfect place to call home
Julia Nascimento is a Brazilian illustrator and cartoonist with art, fashion, and research backgrounds. Employing a multidisciplinary and multicultural approach to her work, she is passionate about autobiographical narratives and collaborations. 
**A Perfect Place to Call Home** is Julia Nascimento’s first collection of visual narratives about her experiences and reflections of life in different places as a foreigner. 


##1. User experience
The website it made for Julia Nascimentos new book A perfect place called home. Her goal is to attract more readers and have  a teaser to send to publishing companies.
The site provides information about the book and Julia, a sample of the book that the viewer can read and a contact form to get in touch with Julia. There is also a quizz the viewer can take to see if they should move abroad.
The target audiens for the site are potential readers and publishing companies.
###1.1 User stories
As a first-time visitor:
 * I want to be able to find information quickly and without problem.
 * I want user-friendly design that works on different devises.
 * I want high quality images and engaging illustrations.
 * I want to be able to read a sample of the comic.
 * I want an easy way to get in contact with the author.

----
##2. Design
###2.1 Colour scheme
As the website has large and colorful illustrations from Julias book I decided that I would only use a few colors for the rest of the site. The body is a green to look like grass and and I took the button colour from the dark trees in the left corner. The text is white exept for the modal with the comic. 


###2.2 Typography
I have used the font Roboto from Google fonts for all the text on the website.

<img width="816" height="160" alt="fonts" src="https://github.com/user-attachments/assets/29792d7c-989e-49df-9bcf-c28344feb3d8" />

I have used Font Awesome for the social media icons.


###2.3 Imagery
All the images used are from Julias book but has been slightly modified by me with Julias concent.


###2.4 Wireframes
I have used [Whimsical](https://whimsical.com/) to build the wireframes for the site.


###2.5 Project planning

----
##3. Features

###3.1 General features

###3.1.1 Nav-bar and footer
Because of the large picture at the top of the page I didnt want to take away from it by adding a full navbar. I used a burger icon from Font Awsome and added a small modal to appear when pushed. In the modal are buttons with links to the author, quizz and contact moduals. 


<img width="345" height="173" alt="navbar-open" src="https://github.com/user-attachments/assets/22b0f9b2-ffae-4ac5-aa16-3d33b2f70719" />

The footer is the the image from the bottom of the book. I made the background transperent so it feels like you are moving inside the book as you scroll down.

<img width="826" height="279" alt="footer2" src="https://github.com/user-attachments/assets/8995202c-77ee-4870-b02c-20a05537b150" />


###3.1.2 Index page
the index page contains a hero section with the image of the top of the book. Under it is the title of the book and a short text and a image if the cover of the book. This allows the user to immediately understand the purpose of the website. At the bottom is a Read as sample - button that takes you further down the page to the carousel.



I put in a slow scroll in CSS when you push the button so it takes you down an image with a squiggly line to represent the travel she made between the different countries. 

<img width="830" height="479" alt="squiggle" src="https://github.com/user-attachments/assets/85af0fa9-e9e5-43a4-975f-e6ba6cb07a4e" />

**The carousel**
To read a sample of the book there is a carousel with next and previus buttons from Font Awesome and dotts to show what page you are on. There are two comic squares per page. The carousel is fully responsive over different devices. On a small screen the comic sqaures go from a row to a column so the image can be as large as possible to ensure that it is still readable.

Under the carousel are buttons to take you on to the different modals: author, quizz and contact. 

<img width="471" height="86" alt="buttons" src="https://github.com/user-attachments/assets/1fccbea6-0bc7-4eab-8347-5e441ee2a380" />


###3.1.3 Modals
All the modals are fully responsive to different devices. They all have the same background as the index page and a shadow beneath so it is easily recorgnisable as modals. They also all have a X from Font Awesome so the user can close the modal without doing the quizz or filling in the contact form.

**Author modal**
The modal contains information on Julia Nascimento's background and what she is doing now. Here you can also find her social media and a link to the contact form. There is also a photo of Julia.


**Quizz modal**
There is a short quizz to see if the viewer should move abroad. There are five questions to answer and an Get my answer - button. Three or more yes answers will tell the user to move abroad in an alert window, less then three yes answers will show an alert that the user should stay where they are.

<img width="338" height="433" alt="quizz" src="https://github.com/user-attachments/assets/561b4adc-0c0d-4ba2-af18-8007a04320c3" />

**Contact modal**
To get in touch with Julia there is a contact form where the user puts in their name, email and message before pushing the submit button. When sent an alert comes up that the message has been sent on.


<img width="656" height="509" alt="contact" src="https://github.com/user-attachments/assets/faaeb483-d678-4ecc-ad80-573e5e107b5d" />


###3.2 Future implementations
To make the site better I would put in more of the comic squares so there was more to show in the carousel.

I would put in smaller moduals for the quizz instead of the alert.

I would also put in a succes modal to show that the message has been sent.

###3.3 Accessibility
The aim while designing the webistes is to make it as accessible and user friendly as possible. To achieve this the following has been done:

 * Semantic HTML - for this I have used the [Contrast Checker](https://webaim.org/resources/contrastchecker/) to make sure all my text is visable.
 * I have used the [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) to make sure the visuals on the page has enough contrast.
 * Aria-labels have been used when possible.

----
##4. Technologies used

###4.1 Laguage used
HTML
CSS
JavaScript

### 4.2 Framework, libraries and programs used

* Git  - for version control and deployment
* GitHub - used to save files
* [Whimsical](https://whimsical.com/) - used for the wireframe
* [Google Fonts](https://fonts.google.com/) - used for all the fonts on the site
* [Font Awesome](https://fontawesome.com/) - used for the social media logos
* [Faveicon](https://favicon.io/favicon-generator/) - used to make a faveicon
* Chrome dev tools - to test the website and make sure it is all responsive

----
## 5. Deployment

**The website is deployed using GitHub Pages.**

 1. Login to GitHub
 2. Go to the repository for this project - [Connecting Comics]()
 3. Go to the settings
 4. Select pages in the left hand menu
 5. Make sure that the source dropdown is on ”Deploy from branch” and the Branch is selected main and then press save.
 6. The site has been deployed and after a few minutes and a link can be found in the deployment section.

**Local deployment**

 1. Go to the repository for this project - [Connecting Comics]()
 2. Click on the Code button and copy the URL (HTTPS).
 3. Open your terminal or command prompt.
 4. Clone the repository.

----
##6. Testing

###6.1 Testing user stories

 * I want to be able to find information quickly and without problem.

<img width="626" height="341" alt="userstory1" src="https://github.com/user-attachments/assets/bfa7e832-de45-4705-8ac8-b5c0b06790c2" />
 
 * I want user-friendly design that works on different devises.
 * I want high quality images and engaging illustrations.

<img width="702" height="328" alt="unserstory2 1" src="https://github.com/user-attachments/assets/93b1d983-a7b7-4ee3-9a54-5d0f721a7b34" />

 * I want to be able to read a sample of the comic.

<img width="542" height="300" alt="userstory2" src="https://github.com/user-attachments/assets/eb652704-e8b7-40c4-ad81-2bd3e1aeb66b" />
 
 * I want an easy way to get in contact with the author.

<img width="656" height="509" alt="contact" src="https://github.com/user-attachments/assets/8533c197-80dc-4694-991d-0fdc75878b9c" />


###6.2 Fixing bugs
There was a line at the top of the the website that I could not get rid of. After asking Claud AI I was able to put in the right code in CSS to fix the problem.

<img width="344" height="107" alt="bug line" src="https://github.com/user-attachments/assets/e151b79e-6419-4666-b3e6-45cd473c3d11" />

When I put in the carousel code in JS the forward buttons worked until I reached the end of the images and then the images disapeared complitely.  

<img width="319" height="298" alt="comic bug" src="https://github.com/user-attachments/assets/79cbd63b-2e5a-443b-b21e-2736dd3914ea" />

With the help of Claude AI I put in a % so the carousel keeps going around.

<img width="475" height="125" alt="bugslide" src="https://github.com/user-attachments/assets/f0a87501-b573-4f61-8039-f065156caa41" />


Manual testing
Lighthouse
Validation
W3C html and css
Autoprefixer css


Credits
Code used
Content
Media
Documentation and testing
Acknowledgements 
