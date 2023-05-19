const projectImage1 = document.querySelector("#project1")
const projectImage2 = document.querySelector("#project2")
const projectImage3 = document.querySelector("#project3")
const projectImage4 = document.querySelector("#project4")

let list = [projectImage1, projectImage2, projectImage3, projectImage4]

list.forEach(project => project?.addEventListener('mouseover', ()=>{
  project.firstElementChild?.classList.add("hover")

  list.forEach(project => project?.addEventListener('mouseout',  ()=>{
   project.firstElementChild?.classList.remove("hover")
  }))
}))
