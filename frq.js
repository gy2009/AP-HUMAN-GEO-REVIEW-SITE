
let time = 4500;
let timer = setInterval(() => {
    if (time <= 0) {
        clearInterval(timer);
        alert("Time is up! Submitting...");
        document.getElementById("frq-form").submit();
        return;
    }
    time--;
    document.getElementById("time").innerText = Math.floor(time / 60) + ":" + (time % 60).toString().padStart(2, '0');
}, 1000);
