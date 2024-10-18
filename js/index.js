const alphaCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ \'';
const alpha = 'abcdefghijklmnopqrstuvwxyz \'';

const textStyles = ['italic', 'bold', 'underline', 'line-through'];  // Available text styles

function randomizeStyle() {
  // Select a random style from the array
  const randomStyle = textStyles[Math.floor(Math.random() * textStyles.length)];

  // Get the text element
  let textElement = document.getElementById('stext');

  // Apply or toggle the random style
  switch (randomStyle) {
      case 'italic':
          textElement.style.fontStyle = textElement.style.fontStyle === 'italic' ? 'normal' : 'italic';
          break;
      case 'bold':
          textElement.style.fontWeight = textElement.style.fontWeight === 'bold' ? 'normal' : 'bold';
          break;
      case 'underline':
          textElement.style.textDecoration = textElement.style.textDecoration.includes('underline') 
              ? textElement.style.textDecoration.replace('underline', '').trim() 
              : textElement.style.textDecoration + ' underline';
          break;
      case 'line-through':
          textElement.style.textDecoration = textElement.style.textDecoration.includes('line-through') 
              ? textElement.style.textDecoration.replace('line-through', '').trim() 
              : textElement.style.textDecoration + ' line-through';
          break;
  }
}

function glitchStyle(text) {
  document.getElementById('stext').innerHTML = text;

  // Continuously change text style at random intervals
  setInterval(randomizeStyle, 250);  // Change style every 300ms (adjustable)
}

function glitch(text, id, output = '', progress = 0) {
  const textLength = text.length;

  if (progress >= textLength) {
      document.getElementById('text').innerHTML = output; // Show final output without random char
      return;
  }

  const randomIndex = Math.floor(Math.random() * alpha.length);
  
  if (alpha[randomIndex] === text[progress] || alphaCaps[randomIndex] === text[progress]) {
      output += text[progress];
      progress++;
  }

  const nextChar = progress < textLength ? alpha[randomIndex] : '';  // Add random char only if not done

  // Update text display
  document.getElementById(id).innerHTML = `${output}${nextChar}`;

  // Schedule next glitch
  setTimeout(() => glitch(text, id, output, progress), 5);  // Use setTimeout for consistent timing
}

function showTime() {
    // Get current time and format it
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time to have leading zeros
    const formattedTime = 
        `${hours < 10 ? '0' : ''}${hours}:` +
        `${minutes < 10 ? '0' : ''}${minutes}:` +
        `${seconds < 10 ? '0' : ''}${seconds}`;

    // Update clock display
    document.getElementById('clock').innerHTML = formattedTime;
}

function calculateAge(birthDate) {
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function main() {

  if (navigator.userAgent.match(/iPhone/i)   || navigator.userAgent.match(/iPad/i)  || navigator.userAgent.match(/Android/i)) { 
    window.location.replace("https://simpfey.github.io/m");
  } 

    const ageElement = document.getElementById('age');
    const birthdayTextElement = document.getElementById('stext');

    ageElement.innerHTML = `${calculateAge(new Date('27 August 2010'))} Years old.`;

    const today = new Date();
    if (today.getMonth() === 7 && today.getDate() === 27) {
        birthdayTextElement.innerHTML = "It's my birthday today!";
    }

    glitch("Simpfey", "text");
    glitchStyle("Imagine the Unimaginable");

    setInterval(showTime, 1000);
}
