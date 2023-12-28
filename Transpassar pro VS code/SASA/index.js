'use strict'

var btn_tema = window.document.getElementById('btn_tema')
btn_tema.addEventListener('click', clicar);

function clicar(){
document.querySelector('body').style.background="black";
document.querySelector('body').style.color="white";
document.querySelector('.menu_top').style.background="white";
document.querySelector('li.a').style.color="black";
}


