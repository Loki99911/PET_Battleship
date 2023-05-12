import shipAriaSelect from "./shipAriaSelect.js";
import shipPut from "./shipPut.js";
const dragAndDrop = () => {
  const ships = document.querySelectorAll(".ship");
  const yourSqweres = document.querySelectorAll(".yourSqwere");
  const dropField = document.querySelector(".yourField");

  ships.forEach((ship) => {
    ship.addEventListener("dragstart", dragStart);
    ship.addEventListener("dragend", dragEnd);
  });

  yourSqweres.forEach((sqwere) => {
    sqwere.addEventListener("dragover", dragOver);
    sqwere.addEventListener("dragenter", dragEnter);
    sqwere.addEventListener("dragleave", dragLeave);
    sqwere.addEventListener("drop", drop);
  });

  let draggedShip = null;
  let shipLength = null;
  let shipDirection = null;

  function dragStart(e) {
    e.dataTransfer.setDragImage(this, 25, 25);
    if (
      this.parentNode.nextElementSibling.querySelector(".ships_counter")
        .textContent === "0"
    )
      return;
    draggedShip = this;
    shipLength = draggedShip.classList.contains("x1")
      ? 1
      : draggedShip.classList.contains("x2")
      ? 2
      : draggedShip.classList.contains("x3")
      ? 3
          : 4;
    shipDirection = this.style.flexDirection;
  }

  function dragEnd() {
    draggedShip = null;
  }

  function dragOver(e) {
    if (!draggedShip) return;
    e.preventDefault();
    const startSquere = +this.getAttribute("id");
    shipAriaSelect(shipDirection, startSquere, shipLength, "shipAria", "add");
  }

  function dragEnter(e) {
    if (!draggedShip) return;
    e.preventDefault();
  }

  function dragLeave() {
    if (!draggedShip) return;
    const startSquere = +this.getAttribute("id");
    shipAriaSelect(
      shipDirection,
      startSquere,
      shipLength,
      "shipAria",
      "remove"
    );
  }

  function drop(e) {
    if (!draggedShip) return;
    let newElem = this;
    const shipDirection = draggedShip.style.flexDirection;
    const shipOnField = shipPut(
      // draggedShip,
      shipLength,
      shipDirection,
      newElem,
      dropField
    );
    if (shipOnField) {
      draggedShip.parentNode.nextElementSibling.querySelector(".ships_counter")
        .textContent--;
    }
  }
};
export default dragAndDrop;
