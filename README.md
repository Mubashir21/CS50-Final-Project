# CarsByMubashir: A photography Portfolio

#### Video Demo: <URL HERE>

#### Description:

CarsByMubashir is a photography portfolio website. I am an automotive photographer by hobby and I have been wanting to make myself a website for a couple of years to showcase my work. Once I comepleted the CS50X course, the only thing left was to make the final project. After much deliberation, I decided that I would make a portfolio website for myself.

I made the site using Flask, utilizing its template and redirection features among many others. The languages used in this project include Python, HTML, SCSS (SASS), JavaScript.

The "layout.html" page is the template I used across all my other pages using the Jinja Syntax; it includes the navbar and footer. The "index.html" page is the homepage of the site; it contains the hero section and a photo grid of different shoots that I have done. Upon clicking on any thumbnail, it takes you to another page where one can view numerous photos of that particular shoot arranged in a grid. All images in the grid can be enlarged to get a better view of the photo and if you would like to exit, then one can press the 'x' button to exit from the modal view. The last page, "about.html", gives you a brief introduction about myself along with a photo of mine. Below that is a contact form that can used to send me an email for any inquires that potential clients may have. I used "formspree" api to setup the functionality for my contact form.

I styled all my pages in one file called "styles.scss" and in hindsight, I should have broken my SCSS into smaller chunks and linked them to the master SCSS file as my SCSS file got increasingly difficult to organise and read as my project got bigger. All my pages are responsive, and change themselves to better suit the device the user is using to view my site. I used media queries to do that.

All my JavaScript is in the "script.js" file and is used to toggle between the menu options in mobile view, handle the contact form, and handle the modal views when viewing the photo gallery.

---- gotta write about the mobile nav menu and the static folder and the directories basically. also need to finish the requirements file.
