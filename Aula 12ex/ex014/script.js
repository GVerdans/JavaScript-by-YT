function carregar(){

var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`;

if (hora >= 0 && hora < 12) {
 img.src = 'photos/Manha.jpg'
 document.body.style.background = '#b56504';

} else if (hora >= 12 && hora <= 18) {
    img.src = 'photos/tarde.jpg'
    document.body.style.background = '#6f320e';

} else {
    img.src = 'photos/noite.jpg'
    document.body.style.background = '#013367';
}
}