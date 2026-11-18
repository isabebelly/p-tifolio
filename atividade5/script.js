function maior(){
    let numero1
    let numero2
    let resultado

    numero1= Number (prompt("digite o primeiro numero."));
    numero2= Number (prompt("digite o segundo numero"));

    if(numero1> numero2){  
        alert("o número " + numero1 + " é maior que o número "+ numero2 +".");
    } else if (numero2> numero1){
        alert("o número "+ numero2 + " é maior queo número " + numero1 +".");
    }else{ 
        alert("os números são iguais.")
    }


}