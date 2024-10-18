const text = 'Simpfey'
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', "'"];

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
var output = "";
var progress = 0;
const len = text.length;

function showTime() {
  // Getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  // Setting time for 12 Hrs format
  if (hour >= 12) {
      if (hour > 12) hour -= 12;
      am_pm = "PM";
  } else if (hour == 0) {
      hr = 12;
      am_pm = "AM";
  }

  hour =
      hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime =
      hour +
      ":" +
      min +
      ":" +
      sec +
      am_pm;

  // Displaying the time
  document.getElementById(
      "clock"
  ).innerHTML = currentTime;
}

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
    
    var selement = document.getElementById('stext');

    element.innerHTML = calculateAge(new Date("27 August 2010")) + " Years old.";

    var date = new Date();

    if (date.getMonth()+1 == 8 && date.getDate() == 27)
    {
        selement.innerHTML = "It's my birthday today!";
    }

    glitch();

    setInterval(showTime, 1000);
}