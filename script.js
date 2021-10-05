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
}
