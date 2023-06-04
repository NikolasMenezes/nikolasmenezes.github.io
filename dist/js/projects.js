"use strict";
const projectImage1 = document.querySelector("#project1");
const projectImage2 = document.querySelector("#project2");
const projectImage3 = document.querySelector("#project3");
const projectImage4 = document.querySelector("#project4");
let list = [projectImage1, projectImage2, projectImage3, projectImage4];
list.forEach(project => project === null || project === void 0 ? void 0 : project.addEventListener('mouseover', () => {
    var _a;
    (_a = project.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add("hover");
    list.forEach(project => project === null || project === void 0 ? void 0 : project.addEventListener('mouseout', () => {
        var _a;
        (_a = project.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.remove("hover");
    }));
}));
