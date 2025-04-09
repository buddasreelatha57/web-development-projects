
let x=document.getElementsByClassName("clock")

function day(){
    x[0].innerHTML= Date()
}
function time(){
   x[0].innerHTML=new Date().toLocaleTimeString()
}