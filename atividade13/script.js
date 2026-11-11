function contar(){
    let saida = document.getElementById('saida');

    let cont = 1
    while(cont <= 10 ) { 

        saida.innerHTML += `<p> &#x1F3C1  ${cont}   </p>`;
        cont++;
        

    }
    

    if(numero % 2 == 0){ 
        saida.innerHTML += `<p> <mark> ${cont} </mark> </p>`;
        
}
}