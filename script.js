
var SaveMe = document.getElementById("saveBtn");
var inProgList = document.getElementById("inProg");
SaveMe.addEventListener("click", addFrog);

function addFrog() {
  var infoZone = document.getElementById("MyTextArea").innerText;
  localStorage.setItem("frog", infoZone);
  var newLine = document.createElement("li");
  newLine.textContent(infoZone);
  inProgList.append(newLine);
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";
  
var time = document.getElementById("time");

var currentTime = moment().format("MM/DD/YYYY");

time.textContent = currentTime;

var btn = document.querySelector(".btn");
var jokeTxt = document.querySelector(".joke-container");

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
