function aleatorio(){
    let min = 66;
    let max = 68;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif* aleatorio);


    let mostrar = document.getElementById("resultado");
     mostrar.innerHTML += `<p> Acabei de pensar no número ${num}</p>`;

    if(num == 67){
    alert( " Parabéns você farmou aura " + num)


    }

}