import dragAndDrop from "./dragAndDrop.js";
import shipRotate from "./shipRotate.js";
import createField from "./createField.js";
import refreshField from "./refreshField.js";
import refreshCounter from "./refreshCounter.js";
import startGame from "./startGame.js";
import stopGame from "./stopGame.js";
import addUserShips from "./addUserShips.js";
import restartGame from "./restartGame.js";
import startFlag from "./startFlag.js";

const randomUserShip = document.querySelector(".randomShipBtn");
const refreshBtn = document.querySelector(".refreshBtn");
const startBtn = document.querySelector(".startBtn");
const surrenderBtn = document.querySelector(".surrenderBtn");
const restartBtn = document.querySelector(".restartBtn");

createField("yourField", ["yourSqwere"], 100);
createField("enemyField", ["enemySqwere", "shadow"], 100);
dragAndDrop();
shipRotate();
startFlag();

randomUserShip.addEventListener("click", addUserShips);
refreshBtn.addEventListener("click", () => {
    refreshField("yourField", ["yourSqwere"], 100)
    refreshCounter();
}
);

startBtn.addEventListener("click", startGame);
surrenderBtn.addEventListener("click", stopGame);
restartBtn.addEventListener("click", restartGame);






