function scroll(elementClass) {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", () => {
      let text = document.querySelector(this.querySelector(elementClass));
      let previousDiv = text.previousElementSibling;
      let previousDivLocation = previousDiv.getBoundingClientRect();
      let y = previousDivLocation.y;
      console.log(y);

      if (y < 500 && y > 0) {
        // Calculate new opacity value based on scroll position
        let newOpacity = Math.min(1, Math.max(0, 1 - Math.abs(y) / 500));
        // Set the opacity
        elementClass.style.opacity = newOpacity;
      } else if (y < 0) {
        // Calculate new opacity value based on scroll position
        elementClass.style.opacity = 1;
      } else {
        elementClass.style.opacity = 0;
      }
    });
  });
}
