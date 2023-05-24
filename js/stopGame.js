import doShot from "./doShot.js";

const stopGame = () => {
  const enemySqweres = document.querySelectorAll(".enemySqwere");
  const gunsWrapper = document.querySelector(".gunsWrapper");
  const scoreWrapper = document.querySelector(".scoreWrapper");
  const enemyScore = document.getElementById("enemyScore");

  enemySqweres.forEach((enemySqwere) => {
    enemySqwere.removeEventListener("click", doShot);
    enemySqwere.classList.remove("shadow");
  });
  
  gunsWrapper.classList.remove("afterStart");
  scoreWrapper.classList.add("getScore");

  const handleTransitionstart = () => {
    gunsWrapper.style.zIndex = "-1";
    gunsWrapper.removeEventListener("transitionstart", handleTransitionstart);
  };
  const handleTransitionEnd = () => {
    scoreWrapper.style.zIndex = "0";
    scoreWrapper.removeEventListener("transitionend", handleTransitionEnd);
  };
  gunsWrapper.addEventListener("transitionstart", handleTransitionstart);
  scoreWrapper.addEventListener("transitionend", handleTransitionEnd);
  
  enemyScore.textContent++;
};
export default stopGame;
