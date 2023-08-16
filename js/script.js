const togglebtn = document.querySelector(".toggle__btn");
const nav = document.querySelector(".nav__bar");
togglebtn.addEventListener("click", () => {
 togglebtn.classList.toggle("open");
 nav.classList.toggle("open");
});