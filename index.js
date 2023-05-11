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
  console.log(this);
}

function drop(e) {
  const activeSq = +this.getAttribute("id");
  if (!draggedShip) return;
  let newThis = this;

  if (
    activeSq + shipLength - 1 > Math.ceil(activeSq / 10) * 10 &&
    draggedShip.style.flexDirection === "row"
  ) {
    return shipAriaSelect(
      draggedShip,
      activeSq,
      shipLength,
      "shipAria",
      "remove"
    );
  }

  if (
    activeSq + (shipLength - 1) * 10 > 100 &&
    draggedShip.style.flexDirection === "column"
  ) {
    return shipAriaSelect(
      draggedShip,
      activeSq,
      shipLength,
      "shipAria",
      "remove"
    );
  }

  if (
    dropField.querySelector(".shipPart_1.shipAria") ||
    dropField.querySelector(".shipPart_2.shipAria") ||
    dropField.querySelector(".shipPart_3.shipAria") ||
    dropField.querySelector(".shipPart_4.shipAria")
  )
    return shipAriaSelect(
      draggedShip,
      activeSq,
      shipLength,
      "shipAria",
      "remove"
    );

  newThis.classList.add("shipPart_1");
  for (let i = 2; i <= shipLength; i++) {
    if (draggedShip.style.flexDirection === "row") {
      newThis.nextElementSibling.classList.add(`shipPart_${i}`);
      newThis = newThis.nextElementSibling;
    } else {
      const nextElement = document.getElementById(activeSq + 10 * (i - 1));
      nextElement.classList.add(`shipPart_${i}`);
    }
  }

  // shipAriaSelect(draggedShip, activeSq, shipLength, "over", "add");
  shipAriaSelect(draggedShip, activeSq, shipLength, "shipAria", "remove");
  const counterElem =
    draggedShip.parentNode.nextElementSibling.querySelector(".ships_counter");
  counterElem.textContent--;
}

function shipAriaSelect(draggedShip, startSquere, shipLength, className, func) {
  if (draggedShip.style.flexDirection === "row") {
    const startFor = startSquere % 10 === 1 ? startSquere : startSquere - 1;
    const endFor =
      startSquere + shipLength > Math.ceil(startSquere / 10) * 10
        ? Math.ceil(startSquere / 10) * 10
        : startSquere + shipLength;
    for (let i = startFor; i <= endFor; i++) {
      func === "add"
        ? i - 10 > 0 && document.getElementById(i - 10).classList.add(className)
        : i - 10 > 0 &&
          document.getElementById(i - 10).classList.remove(className);
      func === "add"
        ? i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.add(className)
        : i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.remove(className);
      func === "add"
        ? i + 10 <= 100 &&
          document.getElementById(i + 10).classList.add(className)
        : i + 10 <= 100 &&
          document.getElementById(i + 10).classList.remove(className);
    }
  } else {
    const startFor = startSquere <= 10 ? startSquere : startSquere - 10;
    const endFor =
      startSquere + shipLength * 10 > 100
        ? startSquere + Math.floor((100 - startSquere) / 10) * 10
        : startSquere + shipLength * 10;
    console.log(startFor, endFor);
    for (let i = startFor; i <= endFor; i = i + 10) {
      func === "add"
        ? (i - 1) % 10 !== 0 &&
          document.getElementById(i - 1).classList.add(className)
        : (i - 1) % 10 !== 0 &&
          document.getElementById(i - 1).classList.remove(className);
      func === "add"
        ? i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.add(className)
        : i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.remove(className);
      func === "add"
        ? i % 10 !== 0 &&
          document.getElementById(i + 1).classList.add(className)
        : i % 10 !== 0 &&
          document.getElementById(i + 1).classList.remove(className);
    }
  }
}
