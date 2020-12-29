// Hamburger menu
const content = document.querySelector(".hamburgerLinks");
const nav = document.querySelector("nav");

function toggleMenu(e) {
  if (e.target.nodeName === "SPAN" && !content.classList.contains("active"))
    content.classList.add("active");
  else if (content.classList.contains("active")) {
    content.classList.remove("active");
  }
}

document.body.addEventListener("click", toggleMenu);

// Funkcija za animaciju
// Kada je visina browsera na elementu, zamene se klase
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (
        positionFromTop - windowHeight <= 0 &&
        element.classList.contains("animate__animated")
      ) {
        element.className = element.className.replace(
          "hidden",
          "animate__slideInLeft"
        );
        //element.classList.add('animate__slideInLeft');
        //element.classList.remove('hidden');
      } else if (positionFromTop - windowHeight <= 0) {
        element.className = element.className.replace("hidden", "fade-in");
        //element.classList.add('fade-in');
        //element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
