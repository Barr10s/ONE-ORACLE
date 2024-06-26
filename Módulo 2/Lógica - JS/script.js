// Código da aula:
alert("Boas vindas ao jogodo número secreto")
let numeroSecreto = 5
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 10")

if (chute==numeroSecreto){
    //alert("Isso ai! Você descobriu o número secreto" + " " + (numeroSecreto)) uma forma de concatenar
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`) //outra forma de concatenar
} else{
    alert("Você errou")
}










// Meu código:
// let numeroSecreto = 28;
// acertou = false
// alert("Bem vindo ao jogo do número secreto!")
// let palpite = prompt("Escolha um número entre 1 e 30: ")

// while (acertou==false){
//     if (palpite == numeroSecreto){
//         acertou==true
//         break
//     }
//     if (palpite < numeroSecreto){
//         palpite = prompt("O número secreto é maior, tente novamente: ")
//     }
//     if (palpite > numeroSecreto){
//         palpite = prompt("O número secreto é menor, tente novamente: ")
//     }}
