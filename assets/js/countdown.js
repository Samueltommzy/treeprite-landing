var countDownDate = new Date("dec 10, 2019 12:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " <label> </label> " + " <label> <label> " + " <label> </label> " + hours + " <label> </label> " + " <label> <label> " + " <label> </label> "
        + minutes + " <label> </label> " + " <label> <label> " + " <label> </label> "+ seconds + " ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
    }
}, 1000);

