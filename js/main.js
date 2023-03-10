const themeToggler = document.querySelector(".theme-toggler");

localStorage.getItem("dark-theme")
  ? applyTheme()
  : localStorage.setItem("dark-theme", 0);

function applyTheme() {
  if (parseInt(localStorage.getItem("dark-theme"))) {
    document.body.classList.add("dark");
    document.querySelector(".logo").src = "./assets/logo-dark.png";
    themeToggler.querySelector(".icon").classList.replace("fa-sun", "fa-moon");
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".logo").src = "./assets/logo.png";
    themeToggler.querySelector(".icon").classList.replace("fa-moon", "fa-sun");
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
