function openFoodModal(title, desc, location, price, image) {
  document.getElementById("foodModal").style.display = "flex";

  document.getElementById("modalTitle").innerText = title;

  document.getElementById("modalDesc").innerText = desc;

  document.getElementById("modalLocation").innerText = location;

  document.getElementById("modalPrice").innerText = price;

  document.getElementById("modalImg").src = image;
}

function closeFoodModal() {
  document.getElementById("foodModal").style.display = "none";
}

window.onclick = function (e) {
  const modal = document.getElementById("foodModal");

  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const markers = document.querySelectorAll(".map-marker");

  //source for the math below: https://easings.net/#easeInOutCubic
  function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
  //source: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  function smoothScrollTo(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;

    const distance = targetPosition - startPosition - 50;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;

      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      //source :https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  markers.forEach((marker) => {
    marker.addEventListener("click", function () {
      const targetID = this.getAttribute("data-event") + "-details";
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        smoothScrollTo(targetElement, 1000);

        const title = targetElement.querySelector("h2");

        if (title) {
          title.classList.remove("highlight-title");
          //animation reset adapted from: https://css-tricks.com/restart-css-animation/
          void title.offsetWidth;
          title.classList.add("highlight-title");
        }
        const arrow = targetElement.querySelector(".food-arrow");

        if (arrow) {
          arrow.classList.remove("highlight-title");
          void arrow.offsetWidth;
          arrow.classList.add("highlight-title");
        }
      }
    });
  });
});
