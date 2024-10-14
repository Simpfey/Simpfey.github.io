const text = 'Simpfey'
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', "'"];

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
var output = "";
var progress = 0;
const len = text.length;

function glitch() {
    if (progress >= len) {
      return;
    }  
    var randomNums = Math.floor(Math.random() * alpha.length)
    if (alpha[randomNums] == text[progress] || alphaCaps[randomNums] == text[progress]) {
      output += text[progress];
      document.getElementById("text").innerHTML = `${output}`
      progress++;
    } else {
      document.getElementById("text").innerHTML = `${output}${alpha[randomNums]}`
    }
    requestAnimationFrame(glitch);
  }

function calculateAge(birthyear) {
    var ageDifMs = Date.now() - birthyear;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function main() {
    var element = document.getElementById('age');

    element.innerHTML = calculateAge(new Date("27 August 2010")) + " Years old.";

    glitch();
}