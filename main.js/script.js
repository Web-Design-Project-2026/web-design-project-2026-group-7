const menus = {
  snack: ["Popcorn", "Cotton Candy", "Soft Drinks", "Chips"],
  street: ["Cheeseburger", "Veggie Burger", "Fries", "Sodas"],
  hotdog: ["Classic Hotdog", "Cheese Hotdog", "Chili Dog", "Drinks"],
  langos: ["Classic Langos", "Garlic Langos", "Cheese Langos"],
  pizza: ["Margherita", "Pepperoni", "Veggie", "Garlic Bread"],
  coffee: ["Espresso", "Latte", "Cappuccino", "Croissants"],
  bbq: ["BBQ Ribs", "Pulled Pork", "Cornbread", "Iced Tea"],
};

function openMenu(type) {
  document.getElementById("menuTitle").innerText =
    type.charAt(0).toUpperCase() + type.slice(1) + " Menu";

  const list = document.getElementById("menuItems");
  list.innerHTML = "";

  menus[type].forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("menuPopup").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menuPopup").style.display = "none";
}
