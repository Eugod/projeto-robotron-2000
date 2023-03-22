const pecas = document.querySelectorAll('[data-controle]');

const controleAjuste = document.querySelectorAll('.controleAjuste');

controleAjuste.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        editarRobo(e.target.dataset.controle, e.target.parentNode);
    })
})

function editarRobo(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        if (peca.value > 0) {
            peca.value = Number(peca.value) - 1;

            verificaValor(peca, Number(peca.value));
        }
    } else {
        peca.value = Number(peca.value) + 1;

        verificaValor(peca, Number(peca.value))
    }
}

function verificaValor(peca, valor) {
    valor < 10 ? peca.value = `0${valor}` : peca.value = valor;
}
