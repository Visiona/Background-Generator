var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button")[0];
var hexItems = "0123456789ABCDEF"


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
}

// function generateRandomRGB() {
//   return "rgb("
//           + Math.round(Math.random() * 255)
//           + ", "
//           + Math.round(Math.random() * 255)
//           + ", "
//           + Math.round(Math.random() * 255)
//           + ")";
// }

function generateRandomHEX() {
  var hexCode = "#";
  for(var i=0; i < 6; i++) {
    hexCode += hexItems[Math.floor(Math.random() * 16)];
  }
  return hexCode;
}

function setRandomGradient() {
  color1.value = generateRandomHEX();
  color2.value = generateRandomHEX();
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value
  + ", " 
  +  color2.value
  + ")";
  h3.textContent = body.style.background + ";";
}


setGradient();

button.addEventListener("click", setRandomGradient)

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);