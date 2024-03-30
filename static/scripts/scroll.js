function scroll(elementClass) {
  window.addEventListener("scroll", () => {
    let text = document.querySelector(elementClass);
    let textLocation = text.getBoundingClientRect();
    let y = textLocation.y;

    if (y > 1000) {
      text.style.opacity = "0.25";
    } else if (y < 1000 && y > 400) {
      newOpacity = (1000 - y) / 1000;
      text.style.opacity = newOpacity;
    } else {
      text.style.opacity = "1";
    }
  });
}
