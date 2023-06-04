"use strict";
const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu-toggle");
const menuToggle = () => {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle("hide");
    if (menu === null || menu === void 0 ? void 0 : menu.classList.contains("hide")) {
        menuButton === null || menuButton === void 0 ? void 0 : menuButton.setAttribute("src", "./dist/img/menu_white_36dp.svg");
    }
    else {
        menuButton === null || menuButton === void 0 ? void 0 : menuButton.setAttribute("src", "./dist/img/close_white_36dp.svg");
    }
};
menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener("click", menuToggle);
