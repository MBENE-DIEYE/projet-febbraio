
const show = document.querySelector('#btn-show')
const menu = document.querySelector('.hidden-menu')
const closeIcon= document.querySelector('#colseIcone')

show.addEventListener('click',() => {
    menu.classList.remove('hidden')
})
 

closeIcon.addEventListener('click',() => {
    menu.classList.add('hidden')
})