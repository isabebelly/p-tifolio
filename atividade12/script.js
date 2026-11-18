let inscritos=  0;
let time = 0;

function inscrever(){
inscritos++;
time = 1;
let mostrar = document.getElementById ("resultado"); 

mostrar.innerHTML = `<p> agora sao ${inscritos} inscritos </p>`

if(inscritos > 2  ){
mostrar.innerHTML = `<p> tem  ${time} times e ${inscritos} inscritos </p>`
}
}
