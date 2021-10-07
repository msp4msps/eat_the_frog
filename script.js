
var SaveMe = document.getElementById("saveBtn");
var inProgList = document.getElementById("inProg");
SaveMe.addEventListener("click", addFrog);
//callback for saveme event listener//
function addFrog(event) {
  event.preventDefault();
  var infoZone = document.getElementById("MyTextArea").value;
  localStorage.setItem("frog", infoZone);
  var newLine = document.createElement("li");
  newLine.innerText(infoZone);
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  console.log(infoZone);
  console.log(newLine);
  inProgList.appendChild(newLine + checkbox);
  

  for (let i = 0; i < 4; i++) {
      while (inProgList.length < 4){

      }};
}
var SaveMe = document.getElementById("saveBtn");
var inProgList = document.getElementById("inProg");

function addFrog() {
  var infoZone = document.getElementById("MyTextArea").innerText;
  localStorage.setItem("frog", infoZone);
  var newLine = document.createElement("li");
  newLine.textContent(infoZone);
  inProgList.append(newLine);
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = 1;
<<<<<<< HEAD
  checkbox.name = "todo[]"
};

SaveMe.addEventListener("click", addFrog);
=======
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
>>>>>>> d30ae0643c6419d7863f4ac47a2462376a5fce5b
