var audio = new Audio();
audio.src = './som/vitoria.mp3'

function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: o numero precisa ser entre ${menorValor} a ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        audio.play()
        document.body.innerHTML = `
            <h1>Você Acertou!!</h1>
            <h2>O número secreto era ${numeroSecreto}</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        ` 
        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
        return
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
        return
    }


}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
