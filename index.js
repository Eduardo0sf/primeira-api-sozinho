const numeroDoDado = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
]

const dado1 = document.querySelector("#dado1")
const dado2 = document.querySelector("#dado2")
const soma = document.querySelector("#soma")


function girarUmDado(){
const totalDeValores = numeroDoDado.length
dado2.classList.remove('dadoa')
dado1.classList.add('dadob')

const numeroAleatorio = Math.floor(Math.random() * totalDeValores)

dado1.innerHTML = numeroAleatorio
soma.innerHTML = numeroAleatorio
dado2.innerHTML = ""

}


function girarDoisDados() {
dado2.classList.add('dadoa')
dado1.classList.add('dadob')


//dado 1
const totalDeValore = numeroDoDado.length


const numeroAleatori = Math.floor(Math.random() * totalDeValore)

    //dado 2
    const valorTotal = numeroDoDado.length

    const aleatorioNumero = Math.floor(Math.random() * valorTotal)

dado2.innerHTML = aleatorioNumero
dado1.innerHTML = numeroAleatori
soma.innerHTML = aleatorioNumero + numeroAleatori

}

function reset() {
    dado1.classList.remove('dadob')
    dado2.classList.remove('dadoa')

    soma.innerHTML = "="
}


