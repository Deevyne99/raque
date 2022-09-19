const menu = document.querySelector('.btn-menu')
const close = document.querySelector('.close')
const id = document.getElementById('overlay')
const container = document.querySelector('.mobile-nav')

menu.addEventListener('click', () => {
  id.classList.add('overlay')
  container.classList.add('show')
})
close.addEventListener('click', () => {
  id.classList.remove('overlay')
  container.classList.remove('show')
})
