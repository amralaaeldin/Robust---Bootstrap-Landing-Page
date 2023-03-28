const themeToggler = document.querySelector(".theme-toggler");

localStorage.getItem("dark-theme")
  ? applyTheme()
  : localStorage.setItem("dark-theme", 0);

function applyTheme() {
  if (parseInt(localStorage.getItem("dark-theme"))) {
    document.body.classList.add("dark");
    document.querySelector(".logo").src = "./assets/logo-dark.png";
    themeToggler.querySelector(".icon").classList.replace("fa-moon", "fa-sun");
    document.querySelector(".landing").classList.add("text-white");
    document.querySelector(".about").classList.add("text-white");
    document.querySelector(".faq.accordion").classList.add("text-white");
    document
      .querySelectorAll(".faq.accordion .accordion-item")
      .forEach((item) => item.classList.add("text-white"));
    document
      .querySelectorAll(".faq.accordion .accordion-header button")
      .forEach((item) => item.classList.add("text-white"));
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".logo").src = "./assets/logo.png";
    themeToggler.querySelector(".icon").classList.replace("fa-sun", "fa-moon");
    document.querySelector(".landing").classList.remove("text-white");
    document.querySelector(".about").classList.remove("text-white");
    document.querySelector(".faq.accordion").classList.remove("text-white");
    document
      .querySelectorAll(".faq.accordion .accordion-item")
      .forEach((item) => item.classList.remove("text-white"));
    document
      .querySelectorAll(".faq.accordion .accordion-header button")
      .forEach((item) => item.classList.remove("text-white"));
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
