const input = document.querySelector('.word-input');
const submit = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');

const part1 = document.querySelector('.part1');
const part2 = document.querySelector('.part2');
const blank = document.querySelector('.blank');

const word = document.querySelector('.word');

resetButton.addEventListener('click', hardReset);

submit.addEventListener('click', start);

const level1 = document.querySelector('.c');
const level2 = document.querySelector('.ck');
const level3 = document.querySelector('.k');

const no1 = level1.querySelector('.no');
const no2 = level2.querySelector('.no');
const no3 = level3.querySelector('.no');

const yes1 = level1.querySelector('.yes');
const yes2 = level2.querySelector('.yes');
const yes3 = level3.querySelector('.yes');



function start() {
  reset();
  const [beg, end] = input.value.match(/\w+/g);
  part1.textContent = beg;
  part2.textContent = end;

  word.classList.add('level-1');
}

function adjustWord(length) {
  if (length <= 4) {
    word.classList.add('small');
  } else if (length <= 7) {
    word.classList.add('medium');
  } else {
    word.classList.add('large');
  }
}

yes1.addEventListener('click', goToLevel2);
no2.addEventListener('click', gotoLevel3);

function goToLevel2() {
  word.classList.remove('level-1');
  word.classList.add('level-2');
}

function gotoLevel3() {
  word.classList.remove('level-2');
  word.classList.add('level-3');
  show('k');
}

no1.addEventListener('click', () => show('c'));
yes2.addEventListener('click', () => show('ck'));

function show(char) {
  blank.textContent = char;
  blank.classList.add('revealed');
}

function reset() {
  blank.classList.remove('revealed');
  word.classList.remove('level-1');
  word.classList.remove('level-2');
  word.classList.remove('level-3');
  word.classList.remove('small');
  word.classList.remove('medium');
  word.classList.remove('large');
}

function hardReset() {
  input.value = '';
  word.classList.add('invisible');
  setTimeout(reset, 2000);
  setTimeout(() => word.classList.remove('invisible'), 3000);
}
