const menuToggle = document.querySelector(".menu-toggle")
const menuItems = document.querySelector(".mobile-menu-items")
const body = document.querySelector("body")

menuToggle.addEventListener("click", () => {
  const menuIcon = menuToggle.querySelector("img")

  menuToggle.classList.toggle("on")
  menuItems.classList.toggle("off")

  if (menuToggle.classList.contains("on")) {
    menuIcon.setAttribute("src", "./img/close_white_36dp.svg")
    body.style.overflow = "hidden"
  } else {
    menuIcon.setAttribute("src", "./img/menu_white_36dp.svg")
    body.style.overflow = "initial"
  }
})
