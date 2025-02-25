
// const show = document.querySelector('#btn-show')
// const menu = document.querySelector('.hidden-menu')
// const closeIcon= document.querySelector('#colseIcone')

// show.addEventListener('click',() => {
//     menu.classList.toggle('hidden')
// })
 

// closeIcon.addEventListener('click',() => {
//     menu.classList.add('hidden')
// })

const show= document.querySelector('#bnt-show');
// console.log(show);

const menu= document.querySelector('.hidden-menu')
//  console.log (menu)
show.addEventListener('click', ()=>{
   menu.classList.add('hidden-menu') 
})
 