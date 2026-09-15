function calcular(){
    let nota1trim = Number(prompt(" digite a nota do primeiro trimestre:"));
    let nota2trim = Number(prompt(" digite a nota do segundo trimestre:"));

    let resultado = 180-(nota1trim+nota2trim);
    alert("você precisa de " + resultado + " para ser aprovado.");
    if( resultado <= 0){
        alert( "Parabéns! Você já está aprovado por nota")

    } else{
        alert("você precisa de " + resultado + " para ser aprovado.");

    }
}