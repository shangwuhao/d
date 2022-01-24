window.onload = function () {
    var topbtn = document.getElementById("btn");
    var timer = null;
    var pagelookheight = document.documentElement.clientHeight;
    window.onscroll = function(){
        var backtop = document.documentElement.scrollTop
        if(backtop >= 10){
            topbtn.style.display = "block";
        }else{
            topbtn.style.display = "none";
        }
    }
    topbtn.onclick = function () {
        var timer = setInterval(function () {
            var backtop = document.documentElement.scrollTop;
            var speedtop = backtop/5;  
            document.documentElement.scrollTop = backtop -speedtop;
            if(backtop == 0){
                clearInterval(timer);
            }
            window.onmousewheel = function (){
                clearInterval(timer);
            }
        }, 30);
    }
    var btn = document.getElementById("sou");
    btn.onclick = function(){
        search();
    }
}
function entersearch(){
    var event = window.event
    if (event.keyCode == 13){
        search();
    } 
}
function search(){
    var otext = document.getElementById("text").value;
    window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext);
}
