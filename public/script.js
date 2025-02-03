
function updateTime() {
    const now = dayjs();
    document.getElementById("time").textContent = now.format("hh:mm:ss A");
    document.getElementById("date").textContent = now.format("dddd, MMMM D, YYYY");
}

setInterval(updateTime, 1000);
updateTime();
