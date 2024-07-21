function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    const strSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = `${hours}:${strMinutes}:${strSeconds} ${ampm}`;
    
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();
