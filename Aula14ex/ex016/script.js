function contar() {
    let ini = document.querySelector('input#txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let resultado = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('ERRO')
        resultado.innerHTML = 'Impossível Contar !'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo Inválido. Considerando Passo 1')
            p = 1
        }
        if (i < f) { // Crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else { // Regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }
}