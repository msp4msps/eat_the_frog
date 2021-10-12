var SaveMe = document.getElementById("saveBtn");
var inProgList = document.querySelector(".inProg");
var completedList = document.querySelector(".complete");
var completul = document.querySelector(".c1");

// Weather Variables
var hideWeatherContainer = document.getElementById("hide-weather-container");
var showWeatherContainer = document.getElementById("show-weather-container");
var frogChillingPic = document.getElementById("frog-chilling-pic");
var showWeatherBtn = document.getElementById("show-weather-btn");
var hideWeatherBtn = document.getElementById("hide-weather-btn");
var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");

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
hideWeatherBtn.addEventListener("click", hideWeather);

function hideWeather() {
  localStorage.setItem("weatherPref", "hide");
  showWeatherContainer.classList.add("hide");
  hideWeatherContainer.classList.remove("hide");
}

// Event Listener & Function to Show Weather
showWeatherBtn.addEventListener("click", showWeather);

function showWeather() {
  localStorage.setItem("weatherPref", "show");
  hideWeatherContainer.classList.add("hide");
  showWeatherContainer.classList.remove("hide");
}

var infoZone = [];
infoZone = JSON.parse(localStorage.getItem("frog"));
completedTasks = JSON.parse(localStorage.getItem("completedTasks"));

function addFrog(event) {
  event.preventDefault();
  var infoList = document.getElementById("MyTextArea").value;
  infoZone.push(infoList);
  localStorage.setItem("frog", JSON.stringify(infoZone));
  var div = document.createElement("div");
  div.className = "btnSpace";
  var newLine = document.createElement("li");
  div.appendChild(newLine);
  newLine.textContent = infoList;
  newLine.className = "task";
  inProgList.append(div);
  var dltBtn = document.createElement("button");
  div.append(dltBtn);
  dltBtn.textContent = "Remove Task";
  dltBtn.setAttribute("class", "button is-light is-small");
  dltBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
  event.target.parentElement.remove();
  setLocalStorage();
}

function getTask() {
  if (infoZone === null) {
    infoZone = [];
  } else {
    for (let i = 0; i < infoZone.length; i++) {
      var div = document.createElement("div");
      div.className = "btnSpace";
      var newLine = document.createElement("li");
      div.appendChild(newLine);
      newLine.textContent = infoZone[i];
      newLine.className = "btn";
      inProgList.append(div);
      var checkbox = document.createElement("input");

      var dltBtn = document.createElement("button");
      div.append(dltBtn);
      dltBtn.innerHTML = "Remove Task";
      dltBtn.setAttribute("class", "button is-light is-small");
      dltBtn.addEventListener("click", removeTask);
    }
  }
  if (completedTasks === null) {
    completedTasks = [];
  } else {
    for (let i = 0; i < completedTasks.length; i++) {
      var div = document.createElement("div");
      div.className = "btnSpace";
      var newLine = document.createElement("li");
      div.appendChild(newLine);
      newLine.textContent = completedTasks[i];
      completul.append(div);
      var checkbox = document.createElement("input");

      var dltBtn = document.createElement("button");
      div.append(dltBtn);
      dltBtn.textContent = "Remove Task";
      dltBtn.setAttribute("class", "button is-light is-small");
      dltBtn.addEventListener("click", removeTask);
    }
  }
}
getTask();

function setLocalStorage() {
  infoZone = [];
  localStorage.setItem("frog", JSON.stringify(infoZone));
  list = inProgList.children;
  if (list === null) {
    infoZone = [];
    localStorage.setItem("frog", JSON.stringify(infoZone));
  }
  for (let i = 0; i < list.length; i++) {
    infoZone.push(list[i].children[0].textContent);
    localStorage.setItem("frog", JSON.stringify(infoZone));
  }

  completedTasks = [];
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  completelist = completul.children;
  if (completelist === null) {
    completedTasks = [];
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }

  for (let i = 0; i < completelist.length; i++) {
    if (completelist[i].textContent !== "Frogs Eaten") {
      completedTasks.push(completelist[i].children[0].textContent);
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
  }
  setFrogsEaten();
}

//Adding new Task
SaveMe.addEventListener("click", addFrog);

//Get Current Time for top nave
var time = document.getElementById("time");

var currentTime = moment().format("dddd, MMMM Do YYYY");

time.textContent = currentTime;

// joke variables
var btn = document.querySelector(".btn");
var jokeTxt = document.querySelector(".joke-container");
var hideBtn = document.querySelector(".hide-btn");
var jokeBox = document.querySelector(".joke-box");
var jokeReturn = document.querySelector(".return-box");
var jokeReturnBtn = document.querySelector(".show-jokes");
var jokeInnersection = document.querySelector(".joke-innersection");
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
  localStorage.setItem("jokePref", "hide");
  hideJoke();
  // hideBtn.classList.add();
});

function hideJoke() {
  jokeBox.classList.add("hide");
  localStorage.getItem("jokePref", "hide");
  jokeReturn.classList.remove("hide");
}

function getPreferences() {
  var weatherPref = localStorage.getItem("weatherPref");
  var jokePref = localStorage.getItem("jokePref");
  if (weatherPref === "hide") {
    hideWeather();
  }
  if (jokePref === "hide") {
    hideJoke();
  }
}

getPreferences();

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
jokeReturnBtn.addEventListener("click", function () {
  returnJoke();
});

function returnJoke() {
  localStorage.setItem("jokePref", "show");
  jokeBox.classList.remove("hide");
  jokeReturn.classList.add("hide");
}

//Add Complete Class
completedList.addEventListener("mouseover", function (event) {
  child = event.target;
  if (event.target.className === "droptrue connectedSortable c1 ui-sortable") {
    var list = event.target.children;
    completedTasks = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].textContent !== "Frogs Eaten") {
        list[i].classList.add("completed");
        completedTasks.push(list[i].children[0]);
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
        setLocalStorage();
      }
    }
  }
});

// Badge Counter ------- ( *** INCOMPLETE *** )

var frogCounter = 0;
var frogEaten = document.getElementById("frog-eaten");
var isFrogEaten = false;

// The init function is called when the page loads
function init() {
  getFrogs();
}

// // Function to Check if Frog is Eaten
// if (completedTasks(list[i]++)) {
//   console.log(completedTasks);
//   frogEaten = true;
// }

// Function for Winning a Task / Eaten a frog
function frogWin() {
  frogCounter++;
  setFrogsEaten();
}

// Updates Frogs Eaten Count on Screen and Sets Frog Count to  Client Storage
function setFrogsEaten() {
  var frogs = JSON.parse(localStorage.getItem("completedTasks"));
  frogCount = frogs.length;
  frogEaten.textContent = frogCount;
  localStorage.setItem("frogCount", frogCount);
  return frogCount;
}
setFrogsEaten();

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

// Function to Reset Count Every Week (*** WISH LIST ***)
function resetFrogCount() {
  frogCounter = 0;
  setFrogsEaten();
}

var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal-card-body");
var closeModal = document.querySelector(".delete");

//Modal
closeModal.addEventListener("click", function () {
  modal.className = "modal";
});

function sundayCongrats() {
  var currentDay = moment().format("dddd");
  if (currentDay == "Monday") {
    modalBody.textContent = `Great work this week, you ate ${frogCount} frogs!`;
    modal.className = "modal is-active";
    resetFrogCount();
  }
}
