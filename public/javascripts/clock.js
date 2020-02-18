function updateClock ( ) {
    const currentTime = new Date();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    const timeOfDay = (currentHours < 12) ? "AM" : "PM";

    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    currentHours = ( currentHours === 0 ) ? 12 : currentHours;

    document.getElementById("h").firstChild.nodeValue = currentHours + " :";
    document.getElementById("m").firstChild.nodeValue = currentMinutes + " :";
    document.getElementById("s").firstChild.nodeValue = currentSeconds + "  ";
    document.getElementById("t").firstChild.nodeValue = timeOfDay;
}
