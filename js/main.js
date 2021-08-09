document.getElementById("btn").addEventListener("click", function () {
  let req = new XMLHttpRequest();
  req.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json");
  req.onload = function () {
    let outData = JSON.parse(req.responseText);
    printMsg(outData);
  };

  req.send();
});

function printMsg(jsonData) {
  let msg = "";
  jsonData.forEach(data => {
    msg += "<p>" + data.name + " is a " + data.species + ".</p>";
  });
  document.getElementById("animal").insertAdjacentHTML("beforeend", msg);
}