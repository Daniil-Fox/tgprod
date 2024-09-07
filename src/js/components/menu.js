const menu = document.querySelector(".menu");

if (menu) {
  const headerBtn = document.querySelector(".header__burger");
  const menuBody = menu.querySelector(".menu__body");
  const menuClose = menu.querySelector(".menu__close");
  const menuBtn = menu.querySelector(".menu__btn");

  const menuItems = menu.querySelectorAll(".menu__link");
  headerBtn?.addEventListener("click", (e) => {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.style.opacity = 1;
      menu.style.zIndex = 1;
    }, 0);
    setTimeout(() => {
      menuBody.style.transform = "translateX(0)";
    }, 300);
  });
  menuClose?.addEventListener("click", (e) => {
    menuBody.style.transform = null;
    setTimeout(() => {
      menu.style.opacity = null;
      menu.style.zIndex = null;
    }, 300);

    setTimeout(() => {
      menu.style.display = null;
    }, 600);
  });
  menuItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      menuBody.style.transform = null;
      setTimeout(() => {
        menu.style.opacity = null;
        menu.style.zIndex = null;
      }, 300);

      setTimeout(() => {
        menu.style.display = null;
      }, 600);
    });
  });
  if (menuBtn) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      menuBtn.textContent = "Оставить заявку";
    } else {
      menuBtn.textContent = "Получить бесплатную консультацию";
    }
  }
}
