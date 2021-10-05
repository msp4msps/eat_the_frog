var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");

let weather = {
    apiKey: "275bd71fcc87ee1fd19695e4aee1f3bb",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayWeather(data);
            })
    },


    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;

        document.getElementById("city").innerText = name;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("description").innerText = description;
        document.getElementById("temp").innerText = temp + "° F";
    },
    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    }
};

// Event Listener for Search Button upon Click
document.getElementById("search-btn").addEventListener("click", function() {
    weather.search();
})

// Event Listener for Search Bar if user hits Enter Key
document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

// Event Listener Function to Show Weather Container if User Clicks "Yes"
function showWeather() {
    document.getElementById("weather-prompt").style.display = "none";
};

document.getElementById("yes-btn").addEventListener("click", function() {
    showWeather();
})


// Event Listener Function to Hide Entire Weather Container if User Clicks "No"
function hideWeather() {
    document.getElementById("weather-container").style.display = "none";
}

document.getElementById("no-btn").addEventListener("click", function() {
    hideWeather();
})


