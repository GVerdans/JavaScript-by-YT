let numeros = document.querySelector('input#input_num');
let select_saida = document.querySelector('select#select_result');
let yarra = [];
let resultado = document.querySelector('div#res');


function adicionar(){

    yarra.push(numeros.value);

if (numeros.value < 1 || numeros.value > 100){
        alert('Valor inválido ou já se encontra na lista !');

    } else {

        const valor_select = document.createElement('option');

        valor_select.innerHTML = `O valor ${numeros.value} foi adicionado.`;

        select_saida.appendChild(valor_select);
    }
    
}





function finalizar() {

resultado.innerHTML += `<p> Ao todo temos ${yarra.length} números cadastrados. </p>`
resultado.innerHTML += `<p> O maior valor informado foi ${Math.max.apply(null, yarra)}. </p>`



}