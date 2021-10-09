var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");
var SaveMe = document.getElementById("saveBtn");
var inProgList = document.getElementById("inProg");

var weatherPrompt = document.getElementById("weather-prompt");
var yesBtn = document.getElementById("yes-btn");
var noBtn = document.getElementById("no-btn");
var showWeatherOn = document.getElementById("show-weather");
var currentWeatherContainer = document.getElementById("current-weather-container");

// Current Weather Function
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

// Function to Display the Current Weather
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
searchBtn.addEventListener("click", function() {
    weather.search();
})

// Event Listener for Search Bar if user hits Enter Key
city.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})


// Event Listener to Hide Prompt
yesBtn.onclick = function() {
    currentWeatherContainer.style.display === "show";
    weatherPrompt.style.display = "none";
}

noBtn.onclick = function() {
    weatherPrompt.style.display = "none";
}



function changedMindShow() {
    weatherContainer.style.visibility = "visible";
}

showWeatherOn.addEventListener("click", function() {
    showWeather();
})


// When page loads, only the weather prompt should be showing.
// When the user clicks yes, the weather container should display 
// If the user clicks no, the container changes to just an image of a frog 
// There should be a Show/Hide button that toggles the display so the user can change their mind later
var infoZone = [];

function addFrog(event) {
  event.preventDefault();
  var infoList = document.getElementById("MyTextArea").value;
  infoZone.push(infoList);
  localStorage.setItem("frog", infoZone);
  var newLine = document.createElement("li");
  newLine.textContent = infoList;
  inProgList.append(newLine);
  for (let i = 0; i<infoZone.length; i++){
    var parseThis = JSON.parse(window.localStorage.getItem("frog"));
    newLine.textContent(parseThis[i]);
    inProgList.append(newLine);
  
}}


    // localStorage.getItem("frog")
    // JSON.parse(infoZone)
//   var checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.value = 1;
//   checkbox.name = "todo[]";


SaveMe.addEventListener("click", addFrog);

var time = document.getElementById("time");

var currentTime = moment().format("MM/DD/YYYY");

time.textContent = currentTime;

// joke variables
var btn = document.querySelector(".btn");
var jokeTxt = document.querySelector(".joke-container");
var hideBtn = document.querySelector(".hide-btn");
var jokeBox = document.querySelector(".joke-box")

// displays joke on load
document.addEventListener("DOMContentLoaded", getJoke);

btn.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((object) => (jokeTxt.innerHTML = object.joke));
}

//hideBtn hides joke-box
hideBtn.addEventListener("click", function() {
  hideJoke();
})

function hideJoke() {
  jokeBox.style.display='none';
}

