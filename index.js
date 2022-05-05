const brown = document.querySelector("#b-txt");
const white = document.querySelector("#w-txt");
const nutsack = document.querySelector("#n-txt");
const radioactive = document.querySelector("#r-txt");
const message = document.querySelector("#second-lvl");
const secretPhrase = document.querySelector("#secret");
const theBackDoor = document.querySelector("#second-lvl");
let b = 0;
let w = 0;
let n = 0;
let r = 0;
let s = 0;


function upB() {
  b += 1;
  brown.textContent = `Brown: ${b}`;
  if (b === 12) {
    secretPhrase.textContent = "Start over...*Blob*"; 
  } else {
    secretPhrase.textContent = "";
  };
};

function upW() {
  w += 1;
  white.textContent = `White: ${w}`;
  if (w === 3) {
    secretPhrase.textContent = "Just kidding, dont! *Blob*"; 
  } else {
    secretPhrase.textContent = "";
  };
};

function upN() {
  n += 1;
  nutsack.textContent = `Nutsack: ${n}`;
  if (n === 27) {
    secretPhrase.innerHTML = "<button onclick='rndTwo()'>*Blob*</button>"; 
  } else {
    secretPhrase.textContent = "";   
  };
};

function upR() {
  r += 1;
  radioactive.textContent = `Radioactive: ${r}`;
  if (r === 15) {
    secretPhrase.textContent = "If you went in order you got the code already...look at you with the math though! *Blob*"; 
  } else {
    secretPhrase.textContent = "";
  }
};

function rndTwo() {
  s += 1;
  message.textContent = `Almost there: ${s}`;
  if (s === 21) {
    secretPhrase.innerHTML = "<a href=https://discord.gg/eUYfaUwCbh target=_blank>MBM</a>"; 
  } else {
    true;
  }
};

function reset() {
  b = 0;
  w = 0;
  n = 0;
  r = 0;
  brown.textContent = "Brown: ";
  white.textContent = "White: ";
  nutsack.textContent = "Nutsack: ";
  radioactive.textContent = "Radioactive: ";
};

