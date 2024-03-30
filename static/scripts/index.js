document.addEventListener("DOMContentLoaded", function () {
  // scroll(".featuredparagraph");
  // scroll(".featuredprojectheader");
  navColorChange(".navbar");
});

function navColorChange(elementClass) {
  window.addEventListener("scroll", () => {
    y = window.scrollY;
    let navbar = document.querySelector(elementClass);

    if (y > 100) {
      navbar.style.backgroundColor = "#38393b";
    } else {
      navbar.style.backgroundColor = "white";
    }
  });
}
