const allButtons = document.querySelectorAll<HTMLButtonElement>('.js_button');
const allBoxes = document.querySelectorAll<HTMLElement>('.js-box');

allButtons[0].addEventListener('click', () => {
  allBoxes[0].classList.add('js-box--yellow');
});

allBoxes[0].addEventListener('mouseenter', () => {
  allBoxes[0].classList.add('js-box--red');
});
allBoxes[0].addEventListener('mouseleave', () => {
  allBoxes[0].classList.remove('js-box--red');
});

allButtons[1].addEventListener('click', () => {
  allBoxes[1].innerHTML = 'SUCESS';
  allBoxes[1].classList.add('paragraph');
});

allButtons[2].addEventListener('click', () => {
  allBoxes[2].remove();
});

allButtons[3].addEventListener('click', () => {
  if (allBoxes[3].style.display === 'none') {
    allBoxes[3].style.display = 'block';
  } else {
    allBoxes[3].style.display = 'none';
  }
});

const colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

allButtons[4].addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  allBoxes[4].style.backgroundColor = randomColor;
});

let timer: ReturnType<typeof setInterval>;
let sec = 0;

allButtons[5].addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(() => {
      sec += 1;
      if (sec === 10) {
        clearInterval(timer);
      }
      if (sec < 10) {
        allBoxes[5].innerHTML = `${sec}`;
      } else {
        allBoxes[5].innerHTML = sec.toString();
      }
    }, 100);
  }
  allBoxes[5].classList.add('paragraph');
});

const body = document.querySelector('body');

allButtons[6].addEventListener('click', () => {
  [...allBoxes].map((x) => x.classList.add('js-box--green'));
  body.classList.add('js-body--dark');
});

let timerNew: ReturnType<typeof setInterval>;
let secNew = 0;

allBoxes[4].addEventListener('mouseenter', () => {
  if (!timerNew) {
    timerNew = setInterval(() => {
      secNew += 1;
      if (secNew === 10) {
        clearInterval(timerNew);
      }
      if (secNew < 10) {
        allBoxes[4].innerHTML = `${secNew}`;
      } else {
        allBoxes[4].innerHTML = secNew.toString();
      }
    }, 100);
  }
  allBoxes[4].classList.add('paragraph');
});

allBoxes[4].addEventListener('mouseleave', () => {
  clearInterval(timerNew);
  timerNew = null;
  secNew = 0;
  allBoxes[4].innerHTML = '0';
});

const input = document.querySelector<HTMLElement>('.js-input');

input.addEventListener('input', (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  if (input.parentNode.lastChild) {
    input.parentNode.removeChild(input.parentNode.lastChild);
  }
  const p = document.createElement('p');
  p.textContent = target.value;
  input.parentNode.appendChild(p);
});
