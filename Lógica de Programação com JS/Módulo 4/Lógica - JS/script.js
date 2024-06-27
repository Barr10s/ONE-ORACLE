// Código da aula:
alert("Boas vindas ao jogodo número secreto")
let numeroSecreto = parseInt(Math.random()*100+1)
console.log(numeroSecreto)
let chute
let tentativas = 1

while (chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 100: ")
    if (chute==numeroSecreto){
       break
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }  else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas+1
        tentativas++
    }
}
//operador ternário:
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`)
// if (tentativas > 1){
//     alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto} com ${tentativas} tentativas!)`)
// } else{
//     alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto} com ${tentativas} tentativa!)`)
// }







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
