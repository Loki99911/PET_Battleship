import dragAndDrop from "./dragAndDrop.js";
import shipRotate from "./shipRotate.js";
import createField from "./createField.js";
import refreshField from "./refreshField.js";
import refreshCounter from "./refreshCounter.js";
import doShot from "./doShot.js";
import startGame from "./startGame.js";

const refreshBtn = document.querySelector(".refreshBtn");
const startBtn = document.querySelector(".startBtn");
const enemySqweres = document.querySelectorAll(".enemySqwere");

refreshBtn.addEventListener("click", () => {
    refreshField("yourField", ["yourSqwere"], 100)
    refreshCounter();
}
);
startBtn.addEventListener("click", startGame);
enemySqweres.forEach(enemySqwere => {
    enemySqwere.addEventListener("click", doShot)
});




createField("yourField", ["yourSqwere"], 100);
createField("enemyField", ["enemySqwere", "shadow"], 100);
dragAndDrop();
shipRotate();