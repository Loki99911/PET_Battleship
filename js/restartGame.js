import refreshCounter from "./refreshCounter.js";
import refreshField from "./refreshField.js";

const restartGame = () => {
  const buttonsWrapper = document.querySelector(".buttonsWrapper");
  const scoreWrapper = document.querySelector(".scoreWrapper");
  refreshField("yourField", ["yourSqwere"], 100);
  refreshField("enemyField", ["enemySqwere", "shadow"], 100);
  refreshCounter();
  buttonsWrapper.classList.remove("afterStart");
  scoreWrapper.classList.remove("getScore");
};
export default restartGame;
