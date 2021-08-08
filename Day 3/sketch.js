setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
let hour
let min
let sec
let day_night = 'AM'
const time = document.querySelector('#time')

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    hour = currentDate.getHours();
    min = currentDate.getMinutes();
    sec = currentDate.getSeconds();

    if(hour > 12) {
        day_night = "PM"
        hour = hour - 12;
    }
    if(hour < 10) {
        hour = "0" + hour;
    }

    if(min < 10) {
        min = "0" + min;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }

    time.textContent = hour + ":" + min + ':'+ sec + " " + day_night;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand,  minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();