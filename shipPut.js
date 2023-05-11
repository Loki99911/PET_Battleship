import shipAriaSelect from "./shipAriaSelect.js";

const shipPut = (ship, shipLength, shipDirection, activeElem, field) => {
  const activeElemNum = +activeElem.getAttribute("id");
  const isShipGoRight =
    activeElemNum + shipLength - 1 > Math.ceil(activeElemNum / 10) * 10 &&
    shipDirection === "row";
  const isShipGoDown =
    activeElemNum + (shipLength - 1) * 10 > 100 && shipDirection === "column";
  const isShipOnShip = !!(
    field.querySelector(".shipPart_1.shipAria") ||
    field.querySelector(".shipPart_2.shipAria") ||
    field.querySelector(".shipPart_3.shipAria") ||
    field.querySelector(".shipPart_4.shipAria")
  );

  if (isShipGoRight || isShipGoDown || isShipOnShip) {
    shipAriaSelect(ship, activeElemNum, shipLength, "shipAria", "remove");
    return false;
  }

  activeElem.classList.add("shipPart_1");
  for (let i = 2; i <= shipLength; i++) {
    if (shipDirection === "row") {
      activeElem.nextElementSibling.classList.add(`shipPart_${i}`);
      activeElem = activeElem.nextElementSibling;
    } else {
      const nextElement = document.getElementById(activeElemNum + 10 * (i - 1));
      nextElement.classList.add(`shipPart_${i}`);
    }
  }

  // shipAriaSelect(ship, activeElemNum, shipLength, "over", "add");
  shipAriaSelect(ship, activeElemNum, shipLength, "shipAria", "remove");

  return true;
};
export default shipPut;
