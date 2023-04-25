const themeToggler = document.querySelector(".theme-toggler");

localStorage.getItem("dark-theme")
  ? applyTheme()
  : localStorage.setItem("dark-theme", 0);

function applyTheme() {
  if (parseInt(localStorage.getItem("dark-theme"))) {
    document.body.classList.add("dark");
    document.querySelectorAll(".logo").forEach((item) => {
      item.src = "./assets/logo-dark.png";
    });
    document.querySelector(".wave").src = "./assets/wave-dark.png";
    themeToggler.querySelector(".icon").classList.replace("fa-moon", "fa-sun");
    document.querySelector(".landing").classList.add("text-white");
    document.querySelector(".about").classList.add("text-white");
    document.querySelector(".contact").classList.add("text-white");
    document.querySelector(".faq.accordion").classList.add("text-white");
    document.querySelector(".customers").classList.add("text-white");
    document
      .querySelectorAll(".faq.accordion .accordion-header button")
      .forEach((item) => item.classList.add("text-white"));
    document
      .querySelectorAll(".text-black-50")
      .forEach((item) =>
        item.classList.replace("text-black-50", "text-white-50")
      );
  } else {
    document.body.classList.remove("dark");
    document.querySelectorAll(".logo").forEach((item) => {
      item.src = "./assets/logo.png";
    });
    document.querySelector(".wave").src = "./assets/wave.png";
    themeToggler.querySelector(".icon").classList.replace("fa-sun", "fa-moon");
    document.querySelector(".landing").classList.remove("text-white");
    document.querySelector(".about").classList.remove("text-white");
    document.querySelector(".contact").classList.remove("text-white");
    document.querySelector(".faq.accordion").classList.remove("text-white");
    document.querySelector(".customers").classList.remove("text-white");
    document
      .querySelectorAll(".faq.accordion .accordion-header button")
      .forEach((item) => item.classList.remove("text-white"));
    document
      .querySelectorAll(".text-white-50")
      .forEach((item) =>
        item.classList.replace("text-white-50", "text-black-50")
      );
  }
}

themeToggler.addEventListener("click", () => {
  if (!parseInt(localStorage.getItem("dark-theme"))) {
    localStorage.setItem("dark-theme", 1);
  } else {
    localStorage.setItem("dark-theme", 0);
  }
  applyTheme();
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = document.getElementById("contact-form");
  form.reset();
  form.classList.add("success");
  form.querySelector('.btn[type="submit"]').innerHTML =
    "<i class='tick fa-solid fa-circle-check position-absolute'></i>Message Sent";
});

document.getElementById("desctiption").addEventListener("focus", () => {
  document.getElementById("contact-form").classList.remove("success");
});
