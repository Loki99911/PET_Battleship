import refreshCounter from "./refreshCounter.js";
import refreshField from "./refreshField.js";

const restartGame = () => {
  const buttonsWrapper = document.querySelector(".buttonsWrapper");
  const scoreWrapper = document.querySelector(".scoreWrapper");

  scoreWrapper.classList.remove("getScore");
  buttonsWrapper.classList.remove("afterStart");
  

  const handleTransitionstart = () => {
    scoreWrapper.style.zIndex = "-1";
    scoreWrapper.removeEventListener("transitionstart", handleTransitionstart);
  };
  const handleTransitionEnd = () => {
    buttonsWrapper.style.zIndex = "0";
    buttonsWrapper.removeEventListener("transitionend", handleTransitionEnd);
  };

  scoreWrapper.addEventListener("transitionstart", handleTransitionstart);
  buttonsWrapper.addEventListener("transitionend", handleTransitionEnd);
  // Срабатівает не на конце а в начале(((

  refreshField("yourField", ["yourSqwere"], 100);
  refreshField("enemyField", ["enemySqwere", "shadow"], 100);
  refreshCounter();
};
export default restartGame;
