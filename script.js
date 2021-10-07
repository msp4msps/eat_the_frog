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
  checkbox.name = "todo[]"
};

SaveMe.addEventListener("click", addFrog);