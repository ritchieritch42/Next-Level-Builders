document.addEventListener("DOMContentLoaded", function () {
  let viewportWidth = window.innerWidth;
  if (viewportWidth > 800) {
    scroll(".featuredparagraph");
    scroll(".featuredprojectheader");
    scroll(".service");
    navColorChange(".navbar");
  } else {
    mobileTextScroll(".featuredparagraph");
    mobileTextScroll(".featuredprojectheader");
    mobileTextScroll(".service");
    mobileTextScroll(".aboutparagraphscontainer");
    mobileNavSizeChange(".businessname");
    mobileNavColorChange(".navbar");
  }
});

function mobileNavColorChange(elementClass) {
  window.addEventListener("scroll", () => {
    y = window.scrollY;
    let navbar = document.querySelector(elementClass);
    let businessName = document.querySelector(".businessname");
    let logo = document.querySelector(".logo");

    if (y > 100) {
      navbar.style.backgroundColor = "#38393b";
      businessName.style.color = "white";
      logo.style.opacity = "0";
      logo.style.width = "25px";
    } else {
      navbar.style.backgroundColor = "white";
      businessName.style.color = "#38393b";
      logo.style.opacity = "1";
      logo.style.width = "80px";
    }
  });
}

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

function mobileTextScroll(elementClass) {
  window.addEventListener("scroll", () => {
    let mobileTexts = document.querySelectorAll(elementClass);

    mobileTexts.forEach((mobileText) => {
      let mobileTextLocation = mobileText.getBoundingClientRect();
      let yMobileText = mobileTextLocation.y;

      if (yMobileText > 1000) {
        mobileText.style.opacity = "0.25";
      } else if (yMobileText < 1000 && yMobileText > 400) {
        let newOpacity = (1000 - yMobileText) / 1000;
        mobileText.style.opacity = newOpacity - 0.15;
      } else {
        mobileText.style.opacity = "1";
      }
    });
  });
}

function mobileNavSizeChange(elementClass) {
  let viewportWidth = window.innerWidth;

  if (viewportWidth < 800) {
    // Store original font sizes in an object
    const originalFontSizes = {};
    let mobileTitles = document.querySelectorAll(elementClass);
    mobileTitles.forEach(function (title) {
      originalFontSizes[title] = window.getComputedStyle(title).fontSize;
    });

    window.addEventListener("scroll", () => {
      let y = window.scrollY;

      if (y > 100) {
        mobileTitles.forEach(function (title) {
          title.style.fontSize = "26px";
        });
      } else {
        // Reset font size to original value
        mobileTitles.forEach(function (title) {
          title.style.fontSize = originalFontSizes[title];
        });
      }
    });
  }
}
