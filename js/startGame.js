import shipAriaSelect from "./shipAriaSelect.js";
import shipPut from "./shipPut.js";
import doShot from "./doShot.js";

const startGame = () => {
  const dropField = document.querySelector(".enemyField");
  const enemySqweres = document.querySelectorAll(".enemySqwere");
  const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  ships.map((shipLength) => {
    let result = false;
    while (!result) {
    const shipDirection = Math.round(Math.random()) === 0 ? "row" : "column";
    const shipId = Math.round(Math.random() * 99 + 101);
    const activeElem = dropField.querySelector(`[id="${shipId}"]`);
    shipAriaSelect(shipDirection, shipId, shipLength, "shipAria", "add");
    result = shipPut(shipLength, shipDirection, activeElem, dropField);
    }
  });

  enemySqweres.forEach((enemySqwere) => {
    enemySqwere.addEventListener("click", doShot);
  });

  const buttonsWrapper = document.querySelector(".buttonsWrapper");
  const gunsWrapper = document.querySelector(".gunsWrapper");
  buttonsWrapper.classList.add("afterStart");
  gunsWrapper.classList.add("afterStart");
};
export default startGame;
