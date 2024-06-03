function tabuada() {
    let entradanum = document.querySelector('input#entrada');
    let resultado = document.querySelector('select#seltab');

    if (entradanum.value.length == 0) {
        alert('Digita um numero Animal');
    } else {
        let n = Number(entradanum.value);
        let c = 1;
        resultado.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `resultado${c}`
            resultado.appendChild(item);
            c++
        }


    }


}