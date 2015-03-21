var intervalMs = 200;
var iteration = 0;

function startTime() {
    date = new Date();
    window.mS = date;
    document.write(
        "<br>Start " + date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds() + ":" +
        date.getMilliseconds() + "<br>");
}

function setEndTime() {
    date = new Date;
    document.write(
        "<br>End " + date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds() + ":" +
        date.getMilliseconds() + "<br>");
    document.write("Delay : " +
        ((Number(mS) - Number(date)) % intervalMs) + "<br>");
}

function fiboNachi(n) {
    return n <= 1 ? n : fiboNachi(n - 1) + fiboNachi(n - 2);
}



function test() {
    var fib,
        i = 3;
    startTime();
    while (i <= 29) {
        fib = fiboNachi(1 + i);
        document.write(i + ") " + fib + ", ");
        console.log(i + ") " + fib + ", ");
        i++;
    }
    setEndTime();
    iteration++;
    if (iteration === 3) {
        clearInterval(timer);
    }
}

var timer = setInterval(test, intervalMs);