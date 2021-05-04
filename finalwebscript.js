document.getElementById("mouseover").addEventListener("mouseenter", mouseEnter);
document.getElementById("mouseover").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementById("mouseover").style.color = "green";
}

function mouseLeave() {
  document.getElementById("mouseover").style.color = "darkslategray";
}
