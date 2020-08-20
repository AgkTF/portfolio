const skillBoxTitles = document.querySelectorAll(".skill__box-title");
const skillBoxes = document.querySelectorAll(".skill__box");

skillBoxTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    title.classList.toggle("skill__box-title-darkSh");
    skillBoxes[index].classList.toggle("skills__box-visible");
  });
});

const projectBoxes = document.querySelectorAll(".project__box");
const overlays = document.querySelectorAll(".overlay");
projectBoxes.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    overlays[index].classList.toggle("overlay-visible");
  });
});

// Burger button controller
const burgerBtn = document.querySelector(".hamburger");
const navbarMob = document.querySelector(".navbar--mobile");
const mobileMenu = document.querySelector(".navbar__menu--mobile");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("is-active");

  mobileMenu.classList.toggle("navbar__menu--mobile-hidden");
  navbarMob.classList.toggle("navbar--mobile--hidden");
});
