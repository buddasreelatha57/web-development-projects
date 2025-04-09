let x=document.getElementsByClassName("child_div")

function time() {
    x[0].innerHTML=new Date().getHours()
    x[1].innerHTML=new Date().getMinutes()
    x[2].innerHTML=new Date().getSeconds()  
}