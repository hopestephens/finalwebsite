document.getElementById("mouseover").addEventListener("mouseover", mouseOver);
document.getElementById("mouseover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mouseover").style.color = "green";
}
function mouseOut() {
  document.getElementById("mouseover").style.color = "darkslategrey";
}
