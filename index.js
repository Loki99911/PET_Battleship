import shipAriaSelect from "./shipAriaSelect.js";
import shipPut from "./shipPut.js";
const ships = document.querySelectorAll(".ship");
const sqweres = document.querySelectorAll(".yourSqwere");
const dropField = document.querySelector(".yourField");

ships.forEach((ship) => {
  ship.addEventListener("dragstart", dragStart);
  ship.addEventListener("dragend", dragEnd);
});

sqweres.forEach((sqwere) => {
  sqwere.addEventListener("dragover", dragOver);
  sqwere.addEventListener("dragenter", dragEnter);
  sqwere.addEventListener("dragleave", dragLeave);
  sqwere.addEventListener("drop", drop);
});

let draggedShip = null;
let shipLength = null;
const shipFragment = [];
const shipAroundFragment = [];
const tempBusySq = [];

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
}

function dragEnd() {
  draggedShip = null;
}

function dragOver(e) {
  if (!draggedShip) return;
  e.preventDefault();
  const startSquere = +this.getAttribute("id");
  shipAriaSelect(draggedShip, startSquere, shipLength, "shipAria", "add");
}

function dragEnter(e) {
  if (!draggedShip) return;
  e.preventDefault();
}

function dragLeave() {
  if (!draggedShip) return;
  const startSquere = +this.getAttribute("id");
  shipAriaSelect(draggedShip, startSquere, shipLength, "shipAria", "remove");
  // console.log(this);
}

function drop(e) {
  // const activeSq = +this.getAttribute("id");
  if (!draggedShip) return;
  let newElem = this;
  const shipDirection = draggedShip.style.flexDirection;
  const shipOnField = shipPut(
    draggedShip,
    shipLength,
    shipDirection,
    newElem,
    dropField
  );

  if (shipOnField) {
    const counterElem =
      draggedShip.parentNode.nextElementSibling.querySelector(".ships_counter");
    counterElem.textContent--;
  }
}
