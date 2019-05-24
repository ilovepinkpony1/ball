'use strict';

window.addEventListener('load', main);

function main() {
  setBallPosition();
}

function setBallPosition() {
  const ball = document.querySelector('.ball');
  const field = document.querySelector('.field');
  const borderWidth = Number(getComputedStyle(field).borderWidth.replace('px', ''));
  const { width: fieldWidth, height: fieldHeight } = field.getBoundingClientRect();
  const { height: ballHeight, width: ballWidth } = ball.getBoundingClientRect();

  const maxPosition = {
    left: borderWidth + ballWidth / 2,
    right: fieldWidth - borderWidth * 2 - ballWidth / 2,
    top: borderWidth + ballHeight / 2,
    bottom: fieldHeight - borderWidth * 2 - ballHeight / 2,
  };

  const minMaxSetPosition = {
    left: 0,
    right: fieldWidth - borderWidth * 2 - ballWidth,
    top: 0,
    bottom: fieldHeight - borderWidth * 2 - ballHeight,
  }

  field.addEventListener('click', () => {
    const mousePosX = event.clientX;
    const mousePosY = event.clientY;
    const commonX = mousePosX - ballWidth / 2 - borderWidth;
    const commonY = mousePosY - ballHeight / 2 - borderWidth;
    const left = mousePosX < maxPosition.left ? minMaxSetPosition.left :
     (mousePosX > maxPosition.right ? minMaxSetPosition.right : commonX);

    const top = mousePosY < maxPosition.top ? minMaxSetPosition.top :
     (mousePosY > maxPosition.bottom ?  minMaxSetPosition.bottom : commonY);

    ball.style.left = `${left}px`;
    ball.style.top = `${top}px`;
  });
}