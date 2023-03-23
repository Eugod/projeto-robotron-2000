const botaoTrocarCor = document.querySelector('.trocarCor');

const coresRobo = ['preto', 'vermelho', 'rosa', 'branco', 'azul', 'amarelo']

let contador = 0;

const controleAjuste = document.querySelectorAll('[data-controle]');

const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botaoTrocarCor.addEventListener('click', () => {
    event.preventDefault();

    let robo = document.querySelector('.robo')

    contador++;

    if (contador > 5) {
        contador = 0;
    }

    robo.setAttribute('src', `img/robotron-${coresRobo[contador]}.png`);
})

controleAjuste.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        editarRobo(e.target.dataset.controle, e.target.parentNode);

        atualizaEstatisticas(e.target.dataset.peca, e.target.dataset.controle);
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

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((elemento) => {
        if (operacao === '-') {
            if (elemento.innerHTML > 0 || elemento.innerHTML < 0) {
                elemento.innerHTML = Number(elemento.innerHTML) - pecas[peca][elemento.dataset.estatistica];
            }
        } else {
            elemento.innerHTML = Number(elemento.innerHTML) + pecas[peca][elemento.dataset.estatistica];
        }

    })
}
