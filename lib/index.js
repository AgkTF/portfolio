"use strict";

var skillBoxTitles = document.querySelectorAll(".skill__box-title");
var skillBoxes = document.querySelectorAll(".skill__box");
skillBoxTitles.forEach(function (title, index) {
  title.addEventListener("click", function () {
    title.classList.toggle("skill__box-title-darkSh");
    skillBoxes[index].classList.toggle("skills__box-visible");
  });
});
var projectBoxes = document.querySelectorAll(".project__box");
var overlays = document.querySelectorAll(".overlay");
projectBoxes.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    overlays[index].classList.toggle("overlay-visible");
  });
}); // Burger button controller

var burgerBtn = document.querySelector(".hamburger");
var navbarMob = document.querySelector(".navbar--mobile");
var mobileMenu = document.querySelector(".navbar__menu--mobile");
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("navbar__menu--mobile-hidden");
  navbarMob.classList.toggle("navbar--mobile--hidden");
});