const dia = document.getElementById("day")
const hora = document.getElementById("hour")
const minuto = document.getElementById("minute")
const segundo = document.getElementById("second")

const lancamento = "17 oct 2024"

function countDown() {
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLancamento - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; 
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `${finalDias}D`
    hora.innerHTML = formatoTempo(`${finalHoras}H`)
    minuto.innerHTML = formatoTempo(`${finalMinutos}M`)
    segundo.innerHTML = formatoTempo(`${finalSegundos}S`)
}

const formatoTempo = (tempo) => {return tempo < 10? `0${tempo}` : tempo;}

countDown();
setInterval(countDown, 1000);

const ingressos = []

function Selector(selector) {
    let element = document.querySelector(selector)
    element.classList.toggle("card-highlight")
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key
        var code = event.code
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`)
    }, false)
}

function AddKeyboardEventListeners(){
    document.addEventListener('keydown', (event) => {
        
        let ingresso1 = document.getElementById("quinta")
        let ingresso2 = document.getElementById("sexta")
        let ingresso3 = document.getElementById("sabado")
        let ingresso4 = document.getElementById("domingo")

        let code = event.code
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit4') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }
    }, false)
}

selectCard = (selector) => {
    var element = document.querySelector(selector)
    element.classList.toggle("card-selected")
    if(ingressos.includes(selector)) ingressos.pop(selector)
    else ingressos.push(selector)
}

showSelectedCards = () => {
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos)
}

AddKeyboardEventListeners();