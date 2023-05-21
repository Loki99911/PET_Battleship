import doShot from "./doShot.js";
import addRandomShips from "./addRandomShips.js";

const startGame = () => {
  const dropField = document.querySelector(".enemyField");
  const enemySqweres = document.querySelectorAll(".enemySqwere");
  addRandomShips(dropField);
  enemySqweres.forEach((enemySqwere) => {
    enemySqwere.addEventListener("click", doShot);
  });

  const buttonsWrapper = document.querySelector(".buttonsWrapper");
  const gunsWrapper = document.querySelector(".gunsWrapper");
  buttonsWrapper.classList.add("afterStart");
  gunsWrapper.classList.add("afterStart");

  const handleTransitionEnd = () => {
    gunsWrapper.style.zIndex = "0";
    gunsWrapper.removeEventListener("transitionend", handleTransitionEnd);
  };

  gunsWrapper.addEventListener("transitionend", handleTransitionEnd);
};
export default startGame;
