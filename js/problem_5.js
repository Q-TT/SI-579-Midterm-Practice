const timeSelectElement = document.querySelector('#problem-5 #time-select');
const secondsOldElement = document.querySelector('#problem-5 #seconds-old')

function getInputTimestamp() {
    const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
    return timeSelectElement.valueAsNumber + timezoneOffset;
}

secondsOldElement.textContent = "(TODO)";