// Código da aula:
alert("Boas vindas ao jogodo número secreto")
let numeroSecreto = 5
console.log(numeroSecreto)
let chute
let tentativas = 1

while (chute != numeroSecreto){
    if (chute==numeroSecreto){
        chute = prompt("Escolha um número entre 1 e 10: ")
        //alert("Isso ai! Você descobriu o número secreto" + " " + (numeroSecreto)) uma forma de concatenar
        alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto} com ${tentativas} tentativas!)`) //outra forma de concatenar
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
