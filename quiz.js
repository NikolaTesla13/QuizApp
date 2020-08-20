var username = localStorage.getItem("username");
var points = parseInt(localStorage.getItem("points"));
var rounds = localStorage.getItem("rounds");
var answer = "";
var value = 0;

document.getElementById("stats").innerHTML = username + ": " + points + "<br>";

window.addEventListener("load", ()=>{
  rounds--;
  if(rounds < 0) window.location.href = "finish.html";
  localStorage.setItem("rounds", rounds);
})

fetch("http://jservice.io/api/random").then(
  function(response) {
    response.json().then(function(data) {
      answer = data[0]["answer"];
      value = data[0]["value"];
      console.log("if u wanna cheat: "+answer);
      document.getElementById("question").innerHTML = "question: "+data[0]["question"];
    })
  }
)

function getPoints() {
  var userAnswer = document.getElementById("ans").value;
  if(userAnswer.toUpperCase() == answer.toUpperCase()) {
    points += value;
  } else {
    points -= value/2;
  }
  localStorage.setItem("points", points);
}
