//primeiro desafio
let diaDaSemana = prompt("Que dia é hoje?")

if (diaDaSemana == "sabado"){
    alert("Bom fim de semana!")
} else if (diaDaSemana == "domingo"){
    alert("Bom fim de semana!")
} else{
    alert("Boa semana!")
}

//segundo desafio
let numero = prompt("Digite um número negativo ou positivo e eu vou adivinhar: ")
if (numero >= 0){
    alert(`O número que você escolheu é positivo, inclusive, o número ${numero} é um número bacana!`)
} else{
    alert(`O número ${numero} que você escolheu é negativo.`)
}

//terceiro desafio
let pontuacao = prompt("Sua pontuação no jogo: ")
if (pontuacao >= 100){
    alert("Parabéns, você venceu!")
} else{
    alert("Tente novamente para ganhar")
}

//quarto desafio
saldo = "R$10.000,00"
alert(`Você possui ${saldo} em sua conta bancária.`)

//quinto desafio
usuario = prompt("Escreva seu nome: ")
alert(`Bem vindo ao sistema, ${usuario}.`)


