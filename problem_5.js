const timeSelectElement = document.querySelector('#problem-5 #time-select');
const secondsOldElement = document.querySelector('#problem-5 #seconds-old')

function getInputTimestamp() {
    const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
    return timeSelectElement.valueAsNumber + timezoneOffset;
}

updateOutput();
timeSelectElement.addEventListener('change', () => {
    updateOutput();
});

setInterval(updateOutput, 1000);

function updateOutput() {
    const seconds = Math.round((Date.now() - getInputTimestamp())/1000);
    secondsOldElement.textContent = seconds;
}