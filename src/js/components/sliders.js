import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

new Swiper(".useful__slider", {
  slidesPerView: "auto",
  spaceBetween: 24,

  navigation: {
    prevEl: ".useful-prev",
    nextEl: ".useful-next",
  },
});

new Swiper(".cases__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".case-prev",
    nextEl: ".case-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: "auto",
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
