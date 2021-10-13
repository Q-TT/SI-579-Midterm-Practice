// The following function accepts one argument (a callback function)
// and calls it back with two arguments:
function getDayEvents(callback) {
    fetch('https://events.umich.edu/day/json')
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

const showEventsButton = document.querySelector('#problem-3 #show-events');
const problemOutputEl = document.getElementById('p3-events-output');

// problemOutputEl.append('(TODO)');

// An example call to getDayEvents:
// getDayEvents((data) => {
//     console.log(data);
// });

showEventsButton.addEventListener('click', () => {
    problemOutputEl.innerHTML = '';
    getDayEvents((data) => {
        for(const key in data) {
            const event = data[key];
            const eventTitle = document.createElement('h3');
            eventTitle.textContent = event.event_title;
            const eventDescription = document.createElement('p');
            eventDescription.textContent = event.description;

            problemOutputEl.append(eventTitle);
            if(event.image_url) {
                const imgPreview = document.createElement('img');
                imgPreview.setAttribute('src', event.image_url);
                problemOutputEl.append(imgPreview);
            }
            problemOutputEl.append(eventDescription);
        }
    });
});