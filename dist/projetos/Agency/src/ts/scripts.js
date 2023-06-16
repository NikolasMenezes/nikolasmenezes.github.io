"use strict";
const portfolioImage = document.querySelectorAll(".job-container");
portfolioImage.forEach(project => project.addEventListener("mouseover", () => {
    const projectTitle = project.firstElementChild;
    const projectDescription = projectTitle === null || projectTitle === void 0 ? void 0 : projectTitle.nextElementSibling;
    projectTitle === null || projectTitle === void 0 ? void 0 : projectTitle.classList.add("hover");
    projectDescription === null || projectDescription === void 0 ? void 0 : projectDescription.classList.add("hover");
    portfolioImage.forEach(project => project === null || project === void 0 ? void 0 : project.addEventListener('mouseout', () => {
        projectTitle === null || projectTitle === void 0 ? void 0 : projectTitle.classList.remove("hover");
        projectDescription === null || projectDescription === void 0 ? void 0 : projectDescription.classList.remove("hover");
    }));
}));
