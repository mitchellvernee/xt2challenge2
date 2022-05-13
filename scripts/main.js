function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

var t = new Date().getHours();
if (t < 10) {
    document.body.style.backgroundColor="yellow";
    document.getElementById("myClock").style.color = "grey";
} else if (t < 20) {
    document.body.style.backgroundColor="orange";
    document.getElementById("myClock").style.color = "black";
} else {
    document.body.style.backgroundColor="grey";
    document.getElementById("myClock").style.color = "black";
}

