const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenu");
const menu = document.querySelector(".menu");

const closeMenu = (e) => {
  if (e.key == "Escape") {
    menu.classList.remove("active");
    window.removeEventListener("keydown", closeMenu);
  }
};
menuButton.addEventListener("click", () => {
  menu.classList.add("active");
  window.addEventListener("keydown", closeMenu);
});
closeMenuButton.addEventListener("click", () => {
  menu.classList.remove("active");
  window.removeEventListener("keydown", closeMenu);
});
