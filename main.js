'use strict';

const ball = document.querySelector('.ball');

document.addEventListener('click', event => {
const ballStyles = getComputedStyle(ball);
const width = ballStyles.width.replace('px', '');
const height = ballStyles.height.replace('px', '');

ball.style.left = `${event.clientX - width / 2}px`;
ball.style.top = `${event.clientY - height / 2}px`;

if (event.clientX + width / 2 > window.innerWidth) {
  ball.style.left = `${window.innerWidth - width}px`;
}

if (event.clientY + height / 2 > window.innerHeight) {
  ball.style.top = `${window.innerHeight - height}px`;
}

if (event.clientX - width / 2 < 0) {
  ball.style.left = `${0}px`;
}

if (event.clientY - height / 2 < 0) {
  ball.style.top = `${0}px`;
}

});