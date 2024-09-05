const faqItems = document.querySelectorAll('.faq-item')

if(faqItems.length > 0){
  faqItems.forEach(el => {
    const btn = el.querySelector('.faq-item__btn')
    const content = el.querySelector('.faq-item__body')


    btn.addEventListener('click', e => {
      let isActive = el.classList.toggle('active')

      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
    })
  })
}
