function estacao(){
    let mes = prompt("Digite o mês por extenso (ex: Setembro): ");
    let mostrar = document.getElementById ('resultado');
    

    mes = mes.toUpperCase();

   if(mes == 'JANEIRO' || mes == 'FEVEREIRO'|| mes == 'MARÇO'){ // o "||" siguinifica "ou". 
    mostrar.innerHTML = `<p> Você pensou no ${mes} e a sua estacao é VERÃO </p>`
   }
   if(mes == 'ABRIL' || mes == 'MAIO'|| mes == 'JUNHO'){ // o "||" siguinifica "ou". 
    mostrar.innerHTML = `<p> Você pensou no ${mes} e a sua estacao é OUTONO </p>`
   }
   if(mes == 'JULHO' || mes == 'AGOSTO'|| mes == 'SETEMBRO'){ // o "||" siguinifica "ou". 
    mostrar.innerHTML = `<p> Você pensou no ${mes} e a sua estacao é INVERNO </p>`
   }
   if(mes == 'OUTUBRO' || mes == 'NOVEMBRO'|| mes == 'DEZEMBRO'){ // o "||" siguinifica "ou". 
    mostrar.innerHTML = `<p> Você pensou no ${mes} e a sua estacao é PRIMAVERA </p>`
   }

   // o usuario informa o mes por extenso e o sistema informa a estação daquele mês.
   

}