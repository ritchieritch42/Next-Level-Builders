document.addEventListener("DOMContentLoaded", function () {
  scroll(".featuredparagraph");
  scroll(".featuredprojectheader");
  navColorChange(".navbar");
  scroll(".aboutparagraphs");
});

function navColorChange(elementClass) {
  window.addEventListener("scroll", () => {
    y = window.scrollY;
    let navbar = document.querySelector(elementClass);
    let links = document.querySelectorAll(".navbarlink");
    let businessName = document.querySelector(".businessname");
    let logo = document.querySelector(".logo");

    if (y > 100) {
      navbar.style.backgroundColor = "#38393b";
      for (i = 0; i < links.length; i++) {
        links[i].style.color = "white";
      }
      businessName.style.color = "white";
      logo.style.opacity = "0";
    } else {
      navbar.style.backgroundColor = "white";
      for (i = 0; i < links.length; i++) {
        links[i].style.color = "#38393b";
      }
      businessName.style.color = "#38393b";
      logo.style.opacity = "1";
    }
  });
}

function scroll(elementClass) {
  window.addEventListener("scroll", () => {
    let texts = document.querySelectorAll(elementClass);
    let text = document.querySelector(elementClass);
    let textLocation = text.getBoundingClientRect();
    let yText = textLocation.y;

    if (yText > 1000) {
      for (let i = 0; i < texts.length; i++) {
        texts[i].style.opacity = "0.25";
      }
    } else if (yText < 1000 && yText > 400) {
      for (let i = 0; i < texts.length; i++) {
        let newOpacity = (1000 - yText) / 1000;
        texts[i].style.opacity = newOpacity - 0.15;
      }
    } else {
      for (let i = 0; i < texts.length; i++) {
        texts[i].style.opacity = "1";
      }
    }
  });
}
