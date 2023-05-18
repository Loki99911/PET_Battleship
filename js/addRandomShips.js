import shipAriaSelect from "./shipAriaSelect.js";
import shipPut from "./shipPut.js";

const addRandomShips = (dropField) => {
  const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  const startSquere = dropField.classList.contains("yourField") ? 1 : 101;

  ships.map((shipLength) => {
    let result = false;
    while (!result) {
      const shipDirection = Math.round(Math.random()) === 0 ? "row" : "column";
      const shipId = Math.round(Math.random() * 99 + startSquere);
      const activeElem = dropField.querySelector(`[id="${shipId}"]`);
      shipAriaSelect(shipDirection, shipId, shipLength, "shipAria", "add");
      result = shipPut(shipLength, shipDirection, activeElem, dropField);
    }
  });
};
export default addRandomShips;
