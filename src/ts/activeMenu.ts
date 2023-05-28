const links: NodeListOf<HTMLAnchorElement> =  document.querySelectorAll(".navbar-link")
const sections: NodeListOf<HTMLElement> =  document.querySelectorAll("section")


const activeMenu = ():void =>{

  let len:number = sections.length

  while(--len && window.scrollY + 115 < sections[len].offsetTop){}
  links.forEach( link => link.classList.remove("current"));
  links[len].classList.add("current")
}

activeMenu();

window.addEventListener("scroll", activeMenu)