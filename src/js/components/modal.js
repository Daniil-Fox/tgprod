const modal = document.querySelector(".modal");

if (modal) {
  const modalBody = modal.querySelector(".modal__body");
  const modalButtons = document.querySelectorAll("[data-modal-btn]");

  const textInput = modal.querySelector('input[type="hidden"]');

  modalButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.dataset) {
        textInput.value = btn.dataset.inputValue;
      }
      modal.classList.add("active");
    });
  });
  modal.addEventListener("click", (e) => {
    modal.classList.remove("active");
  });
  modalBody.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
