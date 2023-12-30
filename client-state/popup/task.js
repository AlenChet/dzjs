document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = modal.querySelector(".modal__close_times");


    const isModalClosed = localStorage.getItem("modalClosed");
  
    if (!isModalClosed) {
      modal.classList.add("modal_active");
    }
  
    closeButton.addEventListener("click", function () {
      modal.classList.remove("modal_active");
  
      localStorage.setItem("modalClosed", true);
    });
  });
  