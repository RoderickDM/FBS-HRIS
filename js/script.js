
const navbtn = document.querySelectorAll(".navItem");
navbtn.forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
     removeActiveItem();
     item.classList.add("active");
    });
});

function removeActiveItem() {
	navbtn.forEach((item) => {
		item.classList.remove('active');
	});
}

const togglebtn = document.querySelector(".toggle__btn");
const nav = document.querySelector(".nav__bar");
togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("open");
    nav.classList.toggle("open");
    navbtn.classList.toggle("open");
});