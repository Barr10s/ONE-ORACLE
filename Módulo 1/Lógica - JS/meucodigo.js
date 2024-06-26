let numeroSecreto = 28;
acertou = false
alert("Bem vindo ao jogo do número secreto!")
let palpite = prompt("Escolha um número entre 1 e 30: ")

while (acertou==false){
    if (palpite == numeroSecreto){
        acertou==true
        break
    }
    if (palpite < numeroSecreto){
        palpite = prompt("O número secreto é maior, tente novamente: ")
    }
    if (palpite > numeroSecreto){
        palpite = prompt("O número secreto é menor, tente novamente: ")
    }}
