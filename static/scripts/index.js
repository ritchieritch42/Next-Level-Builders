document.addEventListener("DOMContentLoaded", function () {
  scroll(".featuredparagraph");
  scroll(".featuredprojectheader");
});

function scroll(elementClass) {
  window.addEventListener("scroll", () => {
    // In this line, you don't need to use `this`, simply use `document.querySelector`
    let text = document.querySelector(elementClass);
    let textLocation = text.getBoundingClientRect();
    let y = textLocation.y;

    if (y < 500 && y > 0) {
      // Calculate new opacity value based on scroll position
      let newOpacity = Math.min(1, Math.max(0, 1 - Math.abs(y) / 500));
      // Set the opacity
      text.style.opacity = newOpacity; // Corrected to `text` instead of `elementClass`
    } else if (y < 0) {
      // Calculate new opacity value based on scroll position
      text.style.opacity = 1; // Corrected to `text` instead of `elementClass`
    } else {
      text.style.opacity = 0; // Corrected to `text` instead of `elementClass`
    }
  });
}
