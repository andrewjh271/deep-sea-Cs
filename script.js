const input = document.querySelector('.word-input');
const submit = document.querySelector('.submit');
const slider = document.querySelector('.slider');

const resetButton = document.querySelector('.reset');
const main = document.querySelector('.main');

const part1 = document.querySelector('.part1');
const part2 = document.querySelector('.part2');
const blank = document.querySelector('.blank');

const word = document.querySelector('.word');

const level1 = document.querySelector('.c');
const level2 = document.querySelector('.ck');
const level3 = document.querySelector('.k');

const no1 = level1.querySelector('.no');
const no2 = level2.querySelector('.no');
const yes1 = level1.querySelector('.yes');
const yes2 = level2.querySelector('.yes');

submit.addEventListener('click', start);
resetButton.addEventListener('click', hardReset);

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    start();
  }
});

yes1.addEventListener('click', goToLevel2);
no1.addEventListener('click', goToLevel1);
no1.addEventListener('click', () => show('c'));
yes2.addEventListener('click', () => show('ck'));
yes2.addEventListener('click', goToLevel2);
no2.addEventListener('click', () => setTimeout(() => show('k'), 1000));
no2.addEventListener('click', gotoLevel3);

function setWindowHeight() {
  document.body.style.height = `${window.innerHeight}px`;
}

setWindowHeight();
window.addEventListener('resize', setWindowHeight);

function start() {
  reset();
  const [beg, end] = input.value.match(/\w+/g);
  part1.textContent = beg;
  part2.textContent = end;
  goToLevel1();
  input.value = '';
}

function goToLevel1() {
  word.classList.add('level-1');
  word.classList.remove('level-2');
  word.classList.remove('level-3');
}

function goToLevel2() {
  word.classList.add('level-2');
  word.classList.remove('level-1');
  word.classList.remove('level-3');
}

function gotoLevel3() {
  word.classList.add('level-3');
  word.classList.remove('level-2');
  word.classList.remove('level-1');
}

function show(char) {
  blank.textContent = char;
  blank.classList.add('revealed');
}

function reset() {
  blank.classList.remove('revealed');
  word.classList.remove('level-1');
  word.classList.remove('level-2');
  word.classList.remove('level-3');
  word.classList.remove('word-highlight');
}

function hardReset() {
  word.classList.add('invisible');
  setTimeout(reset, 2000);
  setTimeout(() => word.classList.remove('invisible'), 3300);
}

slider.addEventListener('click', () => {
  main.classList.toggle('highlight-on');
})

word.addEventListener('click', () => {
  word.classList.toggle('word-highlight');
})