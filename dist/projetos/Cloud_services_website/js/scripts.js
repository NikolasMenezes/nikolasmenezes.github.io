const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modalLogin = document.querySelector("#modal-login");
const fade = document.querySelector("#fade");
let triggers = [openModalButton, closeModalButton, fade];

const toggleModal = function(){
    modalLogin.classList.toggle("hide");
    fade.classList.toggle("hide");
}

triggers.forEach((el) => {
    el.addEventListener("click", function(){
        toggleModal();
    });
  });