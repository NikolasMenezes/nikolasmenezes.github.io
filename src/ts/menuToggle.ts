const menuButton = document.querySelector(".menu-mobile")
const menu = document.querySelector(".menu-toggle")

const menuToggle = () =>{

  menu?.classList.toggle("hide")

  if(menu?.classList.contains("hide")){
    menuButton?.setAttribute("src", "./dist/img/menu_white_36dp.svg")
  } 
  else {
    menuButton?.setAttribute("src", "./dist/img/close_white_36dp.svg")
  }

}

menuButton?.addEventListener("click", menuToggle)