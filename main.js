'use strict';

window.addEventListener('load', main);

function main() {
  getBallParams();
}

function getBallParams() {
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

  field.addEventListener('click', setBallPosition);

  function setBallPosition() {
    const mousePosX = event.clientX;
    const mousePosY = event.clientY;
    const commonX = mousePosX - ballWidth / 2 - borderWidth;
    const commonY = mousePosY - ballHeight / 2 - borderWidth;
    let left = 0;
    let top = 0;

    if (mousePosX < maxPosition.left) {
      left = minMaxSetPosition.left;
    } else if (mousePosX > maxPosition.right) {
      left = minMaxSetPosition.right;
    } else {
      left = commonX;
    }

    if (mousePosY < maxPosition.top) {
      top = minMaxSetPosition.top;
    } else if (mousePosY > maxPosition.bottom) {
      top = minMaxSetPosition.bottom;
    } else {
      top = commonY;
    }

    ball.style.left = `${left}px`;
    ball.style.top = `${top}px`;
  }
}

