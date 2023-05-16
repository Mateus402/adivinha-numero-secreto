const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition(); //estancia

recognition.lang = 'pt-Br' 
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    mostraChute(chute)
    verificaChute(chute)
}

function mostraChute(chute) {
    elementoChute.innerHTML = `
        <div>O chute foi</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

