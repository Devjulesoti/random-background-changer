// GET RANDOM NUMBER

let randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

// SET RANDOM COLOR

let randomColor = () => {
  const h = randomNumber(360);
  const s = randomNumber(100);
  const l = randomNumber(100);
  return `hsl(${h}, ${s}%, ${l}%)`;
};
console.log(randomColor());

// CHANGE BACKGROUND COLOR
let btn = document.querySelector("button");
let text = document.querySelector("h2");
console.log(text);

let buttonEvent = () => {
  let backColor = randomColor();
  document.body.style.backgroundColor = backColor;
  text.style.color = 'green';
};

let settimee = setInterval(() => {
  buttonEvent();
}, 1000);
