window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
};

document.querySelector(".hamburguer-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

const aboutUs = document.querySelector(".about-us");
const scrollBtn = document.querySelector(".scroll-btn");
console.log(window.pageYOffset + window.innerHeight);

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= aboutUs.offsetTop) {
    scrollBtn.classList.add("display-scroll");
  } else {
    scrollBtn.classList.remove("display-scroll");
  }
});
