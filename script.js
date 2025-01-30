console.log(new Date().toISOString())


function updateUTCTime() {
    document.getElementById("utc-time").innerText = new Date().toISOString().split('.') [0] + 'UTC';
}
setInterval(updateUTCTime, 1000); // Updates every second
updateUTCTime(); // Initial call