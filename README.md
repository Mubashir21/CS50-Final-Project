# CarsByMubashir: A photography Portfolio

#### Video Demo: <https://youtu.be/O_BwA3CXIFM>

#### Description:

CarsByMubashir is a photography portfolio website. I am an automotive photographer by hobby and I have been wanting to make myself a website from scratch to showcase my work for quite some time. Once I comepleted CS50, I immediately knew that this is what I wanted to make for my final project.

I made the site using Flask. The languages used in this project include Python, HTML, SCSS (SASS), and JavaScript.

##### HTML

I made a template/boiler HTML page called "layout.html" which I used across all my pages using the Jinja Syntax; the template itself includes the navbar and footer. The "index.html" page is the homepage of the site; it contains the hero section and a photo grid of different cars I have shot in the past. Upon clicking on any thumbnail, it takes you to another page where the user can view many photos of that particular car/event organised in a neat looking grid. Images in the grid can be enlarged by simply clicking on them and the user can exit from the "modal" view by clicking on the 'x' button. The last page, called "about.html", gives you a brief introduction of me. Below that is a contact form that can used to send me an email for any inquires that potential clients may have. I used Formspree's API to setup the functionality for contact form.

##### SCSS

I styled all my pages in one file called "styles.scss" and in hindsight, I should have broken my SCSS into smaller chunks and linked them to the master SCSS file as my SCSS file got increasingly difficult to organise and read as my project got bigger. All my pages are responsive (media queries), and change their layout/style automatically to better suit the device that the user is viewing the site on.

##### JavaScipt

The JavaScript is in the file called "script.js" and is used to enable some dynamic functionality on the site such as to toggle between the menu options in mobile view, handle the contact form, and handle the modal views when viewing the photo gallery.

##### Python

I used Python to enable me to use Flask and some of its functionality. Although I barely used Flask's extensive functionality, it was still great to implement a few features like the template and redirection functionality.

##### Other stuff

Within my master directory, there are 2 additional directories (static and templates), an app.py, readme.md, and a requirements.txt file. In my static folder, I have all of my images used in the project along with script.js (for all the JavaScript), and styles.scss (for all the CSS). In the templates folder reside their all of the HTML pages for my project. The app.py file runs the entire application; readme.md, well, is this file that you are currently reading, and requirements.txt lists all the required modules needed to run this project.

##### Sources used

Lastly, I would like to credit a few resources I used along the way to bring my project to fruition like "W3schools.com", "stackoverflow.com", "geekforgeeks.org", etc.
