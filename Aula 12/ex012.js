var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas!`)

if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')

} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')

} else if (hora > 18 || hora == 0){
console.log ('Boa Noite!')

} else {
    console.log('Madruga!')
}