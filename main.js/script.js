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
