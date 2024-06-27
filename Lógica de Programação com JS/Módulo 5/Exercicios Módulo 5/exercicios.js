//Primeiro desafio
console.log("Boas vindas!")

//segundo desafio
let nome = "Murillo"
console.log(nome)

//terceiro desafio
let nameUser = "Murillo"
alert(`Olá, ${nameUser}`)

//quarto desafio
let gostoDeLinguagem = prompt("Qual linguagem de programação você mais gosta?")
console.log(gostoDeLinguagem)

//quinto desafio
valorSoma1 = 10
valorSoma2 = 7
resultadoSoma = valorSoma1+valorSoma2
console.log(`A soma de ${valorSoma1} e ${valorSoma2} é igual a ${resultadoSoma}.`)

//sexto desafio
valorSub1 = 10
valorSub2 = 5
resultadoSub = valorSub1-valorSub2
console.log(`A diferença entre ${valorSub1} e ${valorSub2} é igual a ${resultadoSub}.`)

//sétimo desafio
let idadeUser = prompt("Digite sua idade: ")
//verificador = idadeUser >= 18 ? console.log("É maior.") : console.log("É menor.")

 if (idadeUser>=18){
     console.log("É maior.")
 } else{
     console.log("É menor.")
 }

//oitavo desafio
numero = prompt("Digite um número: ")

if (numero>=1){
     alert("Seu número é positivo.")
 } else if (numero==0){
    alert("Seu número é o 0.")
} else{
     alert("Seu número é negativo.")
}

//nono desafio
let numeroCrescente = 0
while(numeroCrescente!=11){
    console.log(numeroCrescente++)
}

//décimo desafio
let nota = 7
if (nota>=7){
    console.log("Aprovado")
} else if(nota<7){
    console.log("Reprovado")
}

//décimo primeiro desafio
let numeroAleatorio = parseInt(Math.random()*100+1)
console.log(numeroAleatorio)

//décimo segundo desafio
let numeroAleatorio2 = parseInt(Math.random()*10+1)
console.log(numeroAleatorio2)

//décimo terceiro desafio
let numeroAleatorio3 = parseInt(Math.random()*1000+1)
console.log(numeroAleatorio3)