"use strict";
const links = document.querySelectorAll(".navbar-link");
const sections = document.querySelectorAll("section");
const activeMenu = () => {
    let len = sections.length;
    while (--len && window.scrollY + 115 < sections[len].offsetTop) { }
    links.forEach(link => link.classList.remove("current"));
    links[len].classList.add("current");
};
activeMenu();
window.addEventListener("scroll", activeMenu);
