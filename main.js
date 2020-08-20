var points = 0;
var username = "";
var rounds = 2;

function startGame() {
  username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  localStorage.setItem("points", points);
  localStorage.setItem("rounds", rounds);
}
