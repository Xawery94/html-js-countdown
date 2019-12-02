function makeTimer() {

    //    var endTime = new Date("04 November 2019 21:00:35 GMT+01:00");
    var endTime = new Date("09 December 2019 00:00:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    //20 days left
    if (timeLeft < 1728000) {
        $("body").css("background-image", "url(assets/home.jpg)");
    }

    //10 days left
    if (timeLeft < 864000) {
        $("body").css("background-image", "url(assets/time.png)");
    }

    //on time, change text
    if (timeLeft == 0 || timeLeft < 0) {
        $("#timer").css("display", "none");
        $("#title").css("display", "none");
        $("#end").css("display", "block");
        return;
    }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}

setInterval(function () {
    makeTimer();
}, 1000);
