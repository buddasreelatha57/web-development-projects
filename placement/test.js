let colr=document.getElementById("teal")
colr.style.background="teal"
let x=document.getElementById("orange")
x.style.background="orange"
let y=document.getElementById("green")
y.style.background="green"
// let da=document.getElementById("date")
// da.innerHTML="Date()"

function date() {
    document.getElementById("date").innerHTML=Date();
}
function clock() {
 document.getElementById("tim").innerHTML= new Date().toLocaleTimeString()
    
}
