var sec=0;
var min=0;
var hour=0;
var dt= new Date()
setInterval(
    function(){
        dt=new Date();
        sec=dt.getSeconds()*6;
        min=dt.getMinutes()*6;
        hour=dt.getHours()*30 +Math.round(min/12);
        document.getElementById("second").style.transform="rotate("+sec+"deg)";
        document.getElementById("minute").style.transform="rotate("+min+"deg)"
        document.getElementById("hour").style.transform="rotate("+hour+"deg)"
    }
)
   