const skillBoxTitles = document.querySelectorAll(".skill__box-title");
const skillBoxes = document.querySelectorAll(".skill__box");

skillBoxTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    console.log(skillBoxes);

    title.classList.toggle("skill__box-title-darkSh");
    skillBoxes[index].classList.toggle("skills__box-visible");
  });
});

const projectTitleBtns = document.querySelectorAll(".project__title");
const overlays = document.querySelectorAll(".overlay");
projectTitleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    overlays[index].classList.toggle("overlay-visible");
  });
});
