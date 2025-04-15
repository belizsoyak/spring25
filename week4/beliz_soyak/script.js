let clickTimes = [];

function addOneToCounter() {
    const counter = document.getElementById("counter");
    const clickSound = document.getElementById("clickSound");
    const cpsDisplay = document.getElementById("cps");

    counter.innerText = parseInt(counter.innerText) + 1;
    clickSound.play();

    clickTimes.push(Date.now());

    setInterval(() => {
        const now = Date.now();
        // Only keep clicks from the last 2 seconds
        clickTimes = clickTimes.filter(time => now - time <= 2000);
    
        const cps = (clickTimes.length / 2).toFixed(2);
        document.getElementById("cps").innerText = `Speed: ${cps} clicks/sec`;
    }, 200);

    
}

function resetCounter() {
    document.getElementById("counter").innerText = 0;
}

