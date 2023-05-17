const gunAction = (sqwereElement, gunElement, ballElement) => {
  const {
    top: topSq,
    left: leftSq,
    width: widthSq,
    height: heightSq,
  } = sqwereElement.getBoundingClientRect();
  const centerSqX = leftSq + widthSq / 2;
  const centerSqY = topSq + heightSq / 2;

  const {
    top: topGun,
    left: leftGun,
    width: widthGun,
    height: heightGun,
  } = gunElement.getBoundingClientRect();
  const centerGunX = leftGun + widthGun / 2;
  const centerGunY = topGun + heightGun / 2;

  const {
    top: topBall,
    left: leftBall,
    width: widthBall,
    height: heightBall,
  } = ballElement.getBoundingClientRect();
  const centerBallX = leftBall + widthBall / 2;
  const centerBallY = topBall + heightBall / 2;

  const angle =
    Math.atan(-(centerSqX - centerGunX) / (centerSqY - centerGunY)) *
    (180 / Math.PI);

  gunElement.style.transform = `rotate(${angle}deg)`;

  setTimeout(() => {
    ballElement.style.transform = `translate(${centerSqX - centerBallX}px, ${
      centerSqY - centerBallY+100
    }px)`;
  }, 350);
  
  
  setTimeout(() => {
    ballElement.style.opacity = "0";
    gunElement.style.transform = "";
    ballElement.style.transform = "";
    setTimeout(() => {
      ballElement.style.opacity = "1";
    }, 700);
  }, 700);
};
export default gunAction;

// function moveBlock() {
//   ballElement.classList.add("returnBall");
//   }
//   moveBlock();
  // ballElement.style.transform = `translate(${centerSqX - centerBallX}px, ${
  //   centerSqY - centerBallY
  // }px)`;