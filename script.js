// The data/time we want to countdown to
var countDownDate = new Date("Feb 22, 2021 07:45:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {


var now = new Date().getTime();
var timeleft = countDownDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days 
document.getElementById("hours").innerHTML = hours
document.getElementById("minutes").innerHTML = minutes 
document.getElementById("seconds").innerHTML = seconds 
},1000);