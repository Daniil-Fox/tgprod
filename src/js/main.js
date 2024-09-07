import "./_components.js";

const heroBtn = document.querySelector(".hero__btn");

if (heroBtn) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    heroBtn.textContent = "Оставить заявку";
  } else {
    heroBtn.textContent = "Получить бесплатную консультацию";
  }
}

$(document).ready(function () {
  $(".modal-select").select2({
    placeholder: "Предпочитаемый способ связи",
  });
});
