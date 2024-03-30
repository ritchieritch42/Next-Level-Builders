document.addEventListener("DOMContentLoaded", function () {
  scroll(".featuredparagraph");
  scroll(".featuredprojectheader");
  navColorChange(".navbar");
});

function navColorChange(elementClass) {
  window.addEventListener("scroll", () => {
    y = window.scrollY;
    let navbar = document.querySelector(elementClass);
    let links = document.querySelectorAll(".navbarlink");
    console.log(links);
    let businessName = document.querySelector(".businessname");
    let logo = document.querySelector(".logo");

    if (y > 100) {
      navbar.style.backgroundColor = "#38393b";
      for (i = 0; i < 3; i++) {
        links[i].style.color = "white";
      }
      businessName.style.color = "white";
      businessName.style.fontSize = "3rem";
      logo.style.opacity = "0";
    } else {
      navbar.style.backgroundColor = "white";
      for (i = 0; i < 3; i++) {
        links[i].style.color = "#38393b";
      }
      businessName.style.color = "#38393b";
      businessName.style.fontSize = "2.66rem";
      logo.style.opacity = "1";
    }
  });
}

function scroll(elementClass) {
  window.addEventListener("scroll", () => {
    let text = document.querySelector(elementClass);
    let textLocation = text.getBoundingClientRect();
    let yFeaturedParagraph = textLocation.y;

    if (yFeaturedParagraph > 1000) {
      text.style.opacity = "0.25";
    } else if (yFeaturedParagraph < 1000 && yFeaturedParagraph > 400) {
      newOpacity = (1000 - yFeaturedParagraph) / 1000;
      text.style.opacity = newOpacity;
    } else {
      text.style.opacity = "1";
    }
  });
}
