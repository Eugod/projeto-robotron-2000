const pecas = document.querySelectorAll('.controleContador');

const controleAjuste = [];

const nodeListAjuste = document.querySelectorAll('.controleAjuste');

for(let i = 0; i < nodeListAjuste.length; i++) {

    controleAjuste.push(nodeListAjuste[i]);
};

const subtrair = controleAjuste.filter((e) => {return e.innerHTML === '-'});
const somar = controleAjuste.filter((e) => {return e.innerHTML === '+'});

editarRobo();

function editarRobo() {
    for(let i = 0; i < pecas.length; i++) {
        let peca = pecas[i]

        somar[i].addEventListener('click', () => {
            let valor = converteValor(peca.value);

            valor++;

            verificaValor(peca, valor);
        })

        subtrair[i].addEventListener('click', () => {
            let valor = converteValor(peca.value);

            if(valor > 0) {
                valor --;
            }

            verificaValor(peca, valor);
        })
    }
}

function converteValor(valor) {
    return Number(valor);
}

function verificaValor(peca, valor) {
    valor < 10 ? peca.value = `0${valor}` : peca.value = valor;
}
