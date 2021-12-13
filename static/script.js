// open/close menu (mobile) functionality
const menu = document.getElementById("mobile-cta");
const nav = document.querySelector(".nav-items");
const exit = document.getElementById("mobile-exit");

menu.addEventListener("click", () => {
  nav.style.display = "block";
});

exit.addEventListener("click", () => {
  nav.style.display = "none";
});

// handles the form on about page
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// to handle the modal views when images are clicked

// gets the modal div
var modal = document.querySelector("#myModal");
// gets all the images in the gallery
var images = document.querySelectorAll(".myImages");
// gets the empty image tag where image are to be inserted
var modalImg = document.querySelector("#modalImg");

for (var i = 0; i < images.length; i++) {
  var img = images[i];

  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

var span = document.querySelectorAll(".close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
