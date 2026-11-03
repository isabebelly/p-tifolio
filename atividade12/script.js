let inscritos=  0;
let time = 0

function inscrever(){
inscritos++;
time++;
let mostrar = document.getElementById ("resultado"); 

mostrar.innerHTML = `<p> agora sao ${inscritos} </p>`

if(inscritos >3 ){
mostrar.innerHTML = `<p> tem  ${time} e ${inscritos} </p>`
}
}