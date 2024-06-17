function updateClock(){

    const newtime = new Date();
    let hours = newtime.getHours();
    let mid = hours > 12 ? 'PM' : 'AM';
    hours = hours%12 || 12;
    const minitues = newtime.getMinutes().toString().padStart(2,0);
    const seconds = newtime.getSeconds().toString().padStart(2,0);
    const mili = newtime.getMilliseconds().toString().padStart(1,0);
    hours = hours.toString().padStart(2,0);
    const tempstrng =`${hours}: ${minitues}: ${seconds} ${mid}`;
    document.getElementById("clock").textContent=tempstrng;

}

updateClock();
setInterval(updateClock,1000)
