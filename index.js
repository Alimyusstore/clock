// DIGITAL CLOCK

function startClock(){

    const time = new Date();
    let hours = time.getHours();
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = time.getMinutes().toString().padStart(2,0);
    let seconds = time.getSeconds().toString().padStart(2,0);
    const setTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = setTime;
}

startClock();

setInterval(startClock, 1000);