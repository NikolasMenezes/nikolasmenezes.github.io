const portfolioImage = document.querySelectorAll(".job-container")

portfolioImage.forEach(project => project.addEventListener("mouseover", () => {
  const projectTitle = project.firstElementChild
  const projectDescription = projectTitle?.nextElementSibling

  projectTitle?.classList.add("hover")
  projectDescription?.classList.add("hover")

  portfolioImage.forEach(project => project?.addEventListener('mouseout', () => {
    projectTitle?.classList.remove("hover")
    projectDescription?.classList.remove("hover")
  }))

}))