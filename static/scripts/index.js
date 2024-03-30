document.addEventListener("DOMContentLoaded", function () {
  // scroll(".featuredparagraph");
  // scroll(".featuredprojectheader");
  navColorChange(".navbar");
});

function navColorChange(elementClass) {
  window.addEventListener("scroll", () => {
    y = window.scrollY;
    let navbar = document.querySelector(elementClass);
    let links = document.querySelectorAll(".navbarlink");
    console.log(links);
    let businessName = document.querySelector(".businessname");

    if (y > 100) {
      navbar.style.backgroundColor = "#38393b";
      for (i = 0; i < 3; i++) {
        links[i].style.color = "white";
      }
      businessName.style.color = "white";
    } else {
      navbar.style.backgroundColor = "white";
      for (i = 0; i < 3; i++) {
        links[i].style.color = "#38393b";
      }
      businessName.style.color = "#38393b";
    }
  });
}
