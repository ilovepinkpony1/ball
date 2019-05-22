'use strict';

const ball = document.querySelector('.ball');
const field = document.querySelector('.field');

field.addEventListener('click', event => {
  const ballWidth = ball.getBoundingClientRect().width;
  const ballHeight = ball.getBoundingClientRect().height;
  const borderWidth = Number(getComputedStyle(field).borderWidth.replace('px', ''));
  const mousePosX = event.clientX;
  const mousePosY = event.clientY;
  const fieldWidth =field.getBoundingClientRect().width;
  const fieldHeight = field.getBoundingClientRect().height; 


 if (mousePosX < borderWidth + ballWidth / 2) {
  ball.style.left = '0px';
 } else  if (mousePosX > fieldWidth - borderWidth * 2 - ballWidth / 2) {
  ball.style.left = `${fieldWidth - borderWidth * 2 - ballWidth}px`;
 } else {
  ball.style.left = `${mousePosX - ballWidth / 2 - borderWidth}px`;
 }

 if (mousePosY < borderWidth + ballHeight / 2) {
  ball.style.top = '0px';
 } else if (mousePosY > fieldHeight - borderWidth * 2 - ballHeight / 2) {
  ball.style.top = `${fieldHeight - borderWidth * 2 - ballHeight}px`;
 } else {
  ball.style.top = `${mousePosY - ballHeight / 2 - borderWidth}px`;
 }
}) 