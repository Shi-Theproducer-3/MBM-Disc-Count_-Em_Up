const brown = document.querySelector("#b-txt");
const white = document.querySelector("#w-txt");
const nutsack = document.querySelector("#n-txt");
const radioactive = document.querySelector("#r-txt");
const message = document.querySelector("#lvl");
const secretPhrase = document.querySelector("#secret");
const theBackDoor = document.querySelector("#span");
let b = 0;
let w = 0;
let n = 0;
let r = 0;
let s = 0;
let bDone = false;
let wDone = false;
let rDone = false;  

function upB() {
  b += 1;
  brown.textContent = `Brown: ${b}`;
  if (b === 12) {
    secretPhrase.textContent = "You're a smart one...*Blob*";
    bDone = true; 
  } else if (b > 12) {
    secretPhrase.textContent = "...RESET...you went over!";
  } else {
    secretPhrase.textContent = "*Blob*"
  };
};

function upW() {
  w += 1;
  white.textContent = `White: ${w}`;
  if (w === 3 && bDone == true) {
    secretPhrase.textContent = "Another one?! Okay Dj Khaled *Blob*"; 
    wDone = true;
  } else if (w > 3 && bDone == true) {
    secretPhrase.textContent = "You're already too high, calm down!"
  } else {
    secretPhrase.textContent = "*Blob*"
  };
};

function upN() {
  n += 1;
  nutsack.textContent = `NS: ${n}`;
  if (n === 27 && bDone == true && wDone == true && rDone == true) {
    secretPhrase.innerHTML = "Whats this?! 👀 <button id='secret-btn' onclick='rndTwo()'>*Blob*</button> <strong><em>Bonus</em></strong>";
  } else if (n > 27 && bDone == true && wDone == true && rDone == true) {
    secretPhrase.innerHTML = "<p>You done f***ed up now junior...</p>";
  } else {
    secretPhrase.innerHTML = "<p>*Blob*</p>"
  };
};

function upR() {
  r += 1;
  radioactive.textContent = `Radioactive: ${r}`;
  if (r === 15 && bDone == true && wDone == true) {
    secretPhrase.textContent = "Look at you, you're a dang genius! *Blob*"; 
    rDone = true;
  } else if (r > 15 && bDone == true && wDone == true) {
    secretPhrase.textContent = "You're too high! You keep going too high!"; 
  } else {
    secretPhrase.textContent = "*Blob*"
  }
};

function rndTwo() {
  s += 1;
  message.textContent = `Almost there: ${s}`;
  if (s === 21) {
    secretPhrase.innerHTML += "<a href=https://discord.gg/eUYfaUwCbh target=_blank>MBM</a>";
    theBackDoor.innerHTML = "<p id='second-lvl'>I don't know if you paid attention or not, but all the numbers were divisible by 3. Happens to be the favorite number. Head over to the discord and share the universal divisible number to claim your WL spot!</p>"; 
  } else if (s === 21) {
    secretPhrase.innerHTML += "<a target=_blank>MBM</a> <p>It's Blanks...</p>"; 
  } else {
    secretPhrase.innerHTML = "Whats this?! 👀 <button id='secret-btn' onclick='rndTwo()'>*Blob*</button> <strong><em>Bonus</em></strong>";
  };
};

function reset() {
  b = 0;
  w = 0;
  n = 0;
  r = 0;
  brown.textContent = "Brown: ";
  white.textContent = "White: ";
  nutsack.textContent = "NS: ";
  radioactive.textContent = "Radioactive: ";
};