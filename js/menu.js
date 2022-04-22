const hamburger = document.querySelector('.nav__icon');
const menu = document.querySelector('.nav__hamburger');

/* console.log(menu);
console.log(hamburger); */


/* abrir y cerrar el menú de navegación */
hamburger.addEventListener('click', () => {
    /* alert('click'); */
    menu.classList.toggle('spread');
})

window.addEventListener('click',  e=> {
    /* console.log(e.target); */

    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread');
    }
})