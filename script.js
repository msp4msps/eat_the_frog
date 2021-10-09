var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");
var SaveMe = document.getElementById("saveBtn");
var inProgList = document.querySelector(".inProg");

// Weather Variables
var hideWeatherContainer = document.getElementById("hide-weather-container");
var showWeatherContainer = document.getElementById("show-weather-container");
var frogChillingPic = document.getElementById("frog-chilling-pic");
var showWeatherBtn = document.getElementById("show-weather-btn")
var hideWeatherBtn = document.getElementById("hide-weather-btn");


// Current Weather Function
let weather = {
  apiKey: "275bd71fcc87ee1fd19695e4aee1f3bb",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        this.displayWeather(data);
      });
  },

  // Function to Display the Current Weather
    displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp } = data.main;

    document.getElementById("city").innerText = name;
    document.getElementById("icon").src =
        "http://openweathermap.org/img/wn/" + icon + ".png";
    document.getElementById("description").innerText = description;
    document.getElementById("temp").innerText = temp + "° F";
    },
    search: function () {
    this.fetchWeather(document.getElementById("search-bar").value);
    },
};

// Event Listener for Search Button upon Click
searchBtn.addEventListener("click", function () {
    weather.search();
});

// Event Listener for Search Bar if user hits Enter Key
city.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
    weather.search();
    }
});

// Event Listener & Function to Hide Weather
hideWeatherBtn.addEventListener("click", hideWeather)

function hideWeather() {
    showWeatherContainer.classList.add("hide");
    hideWeatherContainer.classList.remove("hide");
};

// Event Listener & Function to Show Weather
showWeatherBtn.addEventListener("click", showWeather)

function showWeather() {
    hideWeatherContainer.classList.add("hide");
    showWeatherContainer.classList.remove("hide");
}


var infoZone = [];


function addFrog(event) {
  event.preventDefault();
  var infoList = document.getElementById("MyTextArea").value;
  infoZone.push(infoList);
  localStorage.setItem("frog", JSON.stringify(infoZone));
  var newLine = document.createElement("li");
  newLine.textContent = infoList;
  newLine.className = "task";
  inProgList.append(newLine);
  var parseThis = JSON.parse(localStorage.getItem("frog"));
  for (let i = 0; i<parseThis.length; i++){
    newLine.textContent = parseThis[i];
    inProgList.append(newLine);
  
}};


    // localStorage.getItem("frog")
    // JSON.parse(infoZone)
//   var checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.value = 1;
//   checkbox.name = "todo[]";


SaveMe.addEventListener("click", addFrog);

var time = document.getElementById("time");

var currentTime = moment().format("dddd, MMMM Do YYYY");

time.textContent = currentTime;

// joke variables
var btn = document.querySelector(".btn");
var jokeTxt = document.querySelector(".joke-container");
var hideBtn = document.querySelector(".hide-btn");
var jokeBox = document.querySelector(".joke-box");
var jokeReturn = document.querySelector(".return-box")
var jokeReturnBtn = document.querySelector(".show-jokes")

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
hideBtn.addEventListener("click", function () {
  hideJoke();
  hideBtn.classList.add()
});

function hideJoke() {
  jokeBox.classList.add('hide');
  jokeReturn.classList.remove('hide')
}

//Drag and Drop Task
$(function () {
  $("ul.droptrue").sortable({
    connectWith: "ul",
  });

  $("ul.dropfalse").sortable({
    connectWith: "ul",
    dropOnEmpty: false,
  });

  $("#sortable1, #sortable2, #sortable3").disableSelection();
});

// re-displays jokes if user clicks button
jokeReturnBtn.addEventListener('click', function() {
  returnJoke();
})

function returnJoke() {
  jokeBox.classList.remove('hide')
  jokeReturn.classList.add('hide')

}


// Badge Counter ------- ( *** INCOMPLETE *** )

// In order for badge counter to work, 
var frogCounter = 0;
var frogEaten = document.getElementById("frog-eaten");
var isFrogEaten = false;

// Updates Frogs Eaten Count on Screen and Sets Frog Count to  Client Storage
function setFrogsEaten() {
  frogEaten.textContent = frogCounter;
  localStorage.setItem("frogCount", frogCounter);
}

// The init function is called when the page loads
function init() {
  getFrogs();
}

// Function to Get Frogs Stored in Local Storage
function getFrogs() {
  var storedFrogs = localStorage.getItem("frogCount");
  if (storedFrogs === null) {
    frogCounter = 0;
  } else {
    frogCounter = storedFrogs;
  }
  frogEaten.textContent = frogCounter;
}

// Function to Check if Frog is Eaten
// function checkFrogEaten() {
//   if ()
// }

// Function to Reset Count Every Week (*** WISH LIST ***)
function resetFrogCount() {
  frogCounter = 0;
  setFrogsEaten();
}

var currentDay = moment();
console.log(currentDay);

if(currentDay === "Sunday") {
  $("#frog-eaten").resetFrogCount();
};


// Reward Statement Every Sunday
var congratulations = document.createElement("h1");

function displayMessage() {
  congratulations.innerText = ("Great job this week!");
  // Add message that says how many frogs were eaten 
  // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  // ----------------------------------------
}


