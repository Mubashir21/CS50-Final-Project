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