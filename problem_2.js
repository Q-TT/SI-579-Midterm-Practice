const startButton = document.querySelector('#problem-2 #start-button');
const finishButton = document.querySelector('#problem-2 #finish-button');
const timeTakenOutput = document.querySelector('#problem-2 #time-taken')

timeTakenOutput.textContent = `(TODO)`;

// Write your code for problem 2 below

let startTime;
let updateInterval;
startButton.addEventListener('click', () => {
    startTime = Date.now();
    updateInterval = setInterval(() => {
        timeTakenOutput.textContent = Date.now() - startTime;
    });
});

finishButton.addEventListener('click', () => {
    clearInterval(updateInterval);
    const timeTaken = Date.now() - startTime;
    timeTakenOutput.textContent = timeTaken;
});