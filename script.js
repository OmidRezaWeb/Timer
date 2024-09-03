let time =0;
let secend;
function timer(){
    document.getElementById('timer').innerHTML = time;
    time++;
}
function start() {
    secend = window.setInterval(timer, 1000)
}
function stop(){
    window.clearInterval(secend);
}