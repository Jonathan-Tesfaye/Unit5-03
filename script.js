document.getElementById("button").addEventListener("click",buttonOn)

function buttonOn() {
  document.getElementById("button-function").innerHTML = "See, I told you the text would change."
  document.getElementById("cool-car").src = "pug.jfif"
  document.getElementById("cool-car").alt = "A pug"
  document.getElementById("background-color").style.backgroundColor = "grey"

}