function site(){
let nome;
let result;
let agora = new Date;

nome = prompt("Qual é o seu nome?")
result = window.document.getElementById('resultado')

result.innerHTML = ` <p> Olá, ${nome}! È um prazer te conhecer! \n </p> O sistema me enviou a seguinte informação: <mark> ${agora} </mark> </p>`


}