function issData() {
    var Craft = document.querySelector('.craft');
    var Number = document.querySelector('.number');
    var Onboard = document.querySelector('.onboard');
    var issData = document.querySelector('.issData');

    var proxy = "https://cors-anywhere.herokuapp.com/";
    var api = `${proxy}http://api.open-notify.org/astros.json`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.message === "success") {
                console.log("API load was successful");
            } else if(data.message !== "success") {
                console.error("Error loading API!");
            }

            Craft.textContent = `Craft Name: ${data.people[0].craft}`;
            Number.textContent = `There are currently ${data.number} astronauts in space`;
            Onboard.textContent = `Names: ${data.people[0].name}, ${data.people[1].name}, ${data.people[2].name}`;
            issData.textContent = `There are ${data.number} people in the ${data.people[0].craft}! - issdata`;
        })
}

function getLocation() {
    var Lat = document.querySelector('.lat');
    var Long = document.querySelector('.long');

    var proxy = "https://cors-anywhere.herokuapp.com/";
    var api = `${proxy}http://api.open-notify.org/iss-now.json`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            Lat.textContent = `Latitude: ${data.iss_position.latitude}`;
            Long.textContent = `Longitude: ${data.iss_position.longitude}`;
        })
}

setInterval(getLocation, 1000);