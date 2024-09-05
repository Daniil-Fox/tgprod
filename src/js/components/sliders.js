import {Swiper} from 'swiper'
import { Navigation } from 'swiper/modules'

Swiper.use([Navigation])


new Swiper('.useful__slider', {
  slidesPerView: 'auto',
  spaceBetween: 24,

  navigation: {
    prevEl: '.useful-prev',
    nextEl: '.useful-next',
  }
})
