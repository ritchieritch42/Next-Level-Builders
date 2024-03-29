document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    let featuredParagraph = document.querySelector(".featuredparagraph");
    let featuredParagraphLocation = featuredParagraph.getBoundingClientRect();
    let y = featuredParagraphLocation.y;

    if (y < 500) {
      // Calculate new opacity value based on scroll position
      let newOpacity = Math.min(1, Math.max(0, 1 - Math.abs(y) / 500));
      // Set the opacity
      featuredParagraph.style.opacity = newOpacity;
    } else {
      // Reset opacity to 0 if scroll position is beyond 500
      featuredParagraph.style.opacity = 0;
    }
  });
});
