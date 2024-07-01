let numeros = document.querySelector('input#input_num');
let select_saida = document.querySelector('select#select_result');
let resultado = document.querySelector('div#res');
let yarra = [];

function isNumero(n) {
	if (Number(n) >= 1 && Number(n) <= 100) {
		return true;
	} else {
		return false;
	}
}

function inLista(n, l) {
	if (l.indexOf(Number(n)) != -1) {
		return true;
	} else {
		return false;
	}
}



function adicionar() {
	if (isNumero(numeros.value) && !inLista(numeros.value, yarra)) {
		yarra.push(Number(numeros.value));

		let item = document.createElement('option');
		item.text = `Valor ${numeros.value} foi adicionado`;
		select_saida.appendChild(item);
		resultado.innerHTML = ''

	} else {
		alert('Valor inválido ou já se encontra na lista !');
	}
	numeros.value = ''
	numeros.focus()
}





function finalizar() {

	if (yarra.length == 0) {
		alert('Adicione valores antes de finalizar !')
	} else {

		let somaYarra = 0;
		for (let i = 0; i < yarra.length; i++) {
			somaYarra += yarra[i];
		}


		resultado.innerHTML += `<p> Ao todo temos ${yarra.length} números cadastrados. </p>`
		resultado.innerHTML += `<p> O maior valor informado foi ${Math.max.apply(null, yarra)}. </p>`
		resultado.innerHTML += `<p> O menor valor informado foi ${Math.min.apply(null, yarra)}. </p>`


		resultado.innerHTML += `<p> O soma dos valores é engual ${somaYarra}. </p>`
	}
}