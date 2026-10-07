/*variaveis para jogo*/
let mostrar = document.getElementById('resultado');
let computador = 0;
let jogador = 0;
let cont_palpites
/*as linhas abaixo sao para gerar numero aleatorio*/
let min = 1;
let max = 100;
let dif = max - min;
let aleatorioo = Math.random();
computador = min + Math.trunc(dif* aleatorioo);

function jogar(){
  
  jogador = Number(prompt("Qual é o seu palpite"))
    if(jogador < computador){
       mostrar.innerHTML = `<p> Você pensou em ${jogador}, meu número é <b>MAIOR</b>!</p>`
   }else if(jogador > computador){
     mostrar.innerHTML = `<p> Você pensou em ${jogador}, meu número é <b>MENOR</b>!</p>`
   }else if(jogador == computador){
    mostrar.innerHTML = `<p><b> PARABÉNS!!!</b> você acertou! eu tinha pensado no número ${jogador}</P>`
   }

   


        }
        if(computador >50){
        cont_palpites++;
        let mostrar = document.getElementById('resultado')
        mostrar.innerHTML = `<p> Sorte: ${cont_palpites}</p>`
        }
  
        
                      
    

    