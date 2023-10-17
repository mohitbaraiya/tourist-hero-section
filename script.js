/**
 * menu click handler
 */
const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenu");
const menu = document.querySelector(".menu");

// close menu handler
const closeMenu = (e) => {
  if (e.key == "Escape") {
    menu.classList.remove("active");
    window.removeEventListener("keydown", closeMenu);
  }
};

// open menu click
menuButton.addEventListener("click", () => {
  menu.classList.add("active");
  window.addEventListener("keydown", closeMenu);
});
// close menu on click
closeMenuButton.addEventListener("click", () => {
  menu.classList.remove("active");
  window.removeEventListener("keydown", closeMenu);
});

/**
 * end menu click handler
 */

/**
 * search form handler
 */
const searchForm = document.getElementById("searchForm");
const searchFormBtn = document.getElementById("searchBtn");

searchFormBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});
