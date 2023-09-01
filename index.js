/*Exercício de interpretação 1

Leia o código

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza?

b) Para que tipos de números ele imprime no console "Passou no teste"?

c) Para que tipos de números a mensagem é "Não passou no teste"?

a)O console pergunta pro usuário qualquer número, se o número ser par aparece Passou no teste se colocar impar aparece Não passou no teste.

b)Números pares.

c)Números impares.

*/

/*Exercício de interpretação 2

Leia o código abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado.

let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Maçã":
		preco = 2.25
		break;
	case "Uva":
		preco = 0.30
		break;
	case "Pêra":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O preço da fruta", fruta,"é","R$", preco)


a) Para que serve o código acima?

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

c) Considere que um usuário queira comprar uma "Pêra", qual seria a mensagem impressa no console se retirássemos o "break" que está logo acima do "default" (o "break" indicado pelo comentário "BREAK PARA O ITEM D")?


a)Para saber o preço das frutas.

b)'O preço da fruta Maçã é R$ 2.25'.

c)'O preço da fruta Pêra é R$ 5.5', mas antes que apareça no console muda para 'O preço da fruta Pêra é R$ 5'.
  
*/

/*Exercício de interpretação 3

Leia o código

const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
	console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

a)Está criando uma variável constante, falando que essa variável é um número, pergunta para o usuário um número e armazena na variável.

b)Esse número passou no teste = 10
  Não será impresso nada por causa que um erro, mas se não fosse esse erro imprimiria a mensagem 'Essa mensagem é secreta!' = -10

c)Sim, por causa que a variável 'mensagem' só existe dentro do escopo.

*/

/*Exercício de escrita 1

Faça um programa que pergunta ao usuário a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).

a) Faça um "prompt" para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo "Number".

 c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

 let idade = Number(prompt('Qual é a sua idade'))

if (idade >= 18) {
        console.log('Você pode dirigir')
    }
else if (idade <= 18) {
console.log('Você não pode dirigir')
}

*/

/*Exercício de escrita 2

Faça um programa que verifica que turno do dia um aluno estuda.

Peça para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".

let turno = prompt('Qual turno você estuda usando M, V e N? ')

if (turno === 'M') {
    console.log('Bom Dia!')
}
else if (turno === 'V') {
    console.log('Boa Tarde!')
}
else if (turno === 'N') {
    console.log('Boa Noite!')
}

*/

/*Exercício de escrita 3

Repita o exercício anterior, mas utilizando a estrutura de "switch/case".

Dica: Lembre-se que "switch/case" é como se fosse um "if", mas verifica somente igualdades estritas (===).

let turno = prompt('Qual turno você estuda usando M, V e N? ')

switch (turno) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break

    case 'N':
        console.log('Boa Noite!')
        break
    
    default:
        console.log('Deu algo errado escreva novamente')
        break;
}

*/

/*Exercício de escrita 4

Considere a situação

Você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso custar menos de 15 reais.

Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do
ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.

Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(".

let filme = prompt('Que gênero é o filme que vamos assistir?')
let preco = Number(prompt('Quanto custa o ingresso?'))
filme = filme.toLowerCase()
if (filme === 'fantasia' && preco <= 15) {
    console.log('Bom filme')
}
else {
    console.log('Escolha outro filme, ela não vai topar assistir o filme.')
}

*/