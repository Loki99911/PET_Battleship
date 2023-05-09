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

function dragStart(e) {
  console.log(e);
  if (
    this.parentNode.nextElementSibling.querySelector(".ships_counter")
      .textContent === "0"
  )
    return;
  // e.layerX = 25;
  // e.layerY = 25;
  e.offsetX = 25;
  e.offsetY = 25;

  draggedShip = this;
  // console.log(draggedShip.lastElementChild.textContent);
}

function dragEnd() {
  draggedShip = null;
}

function dragOver(e) {
  e.preventDefault();
  // this.classList.add("over");
}

function dragEnter(e) {
  if (!draggedShip) return;
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave() {
  if (!draggedShip) return;
  this.classList.remove("over");
}

function drop(e) {
  if (!draggedShip) return;
  const activeSq = this.getAttribute("id");

  const shipLength = draggedShip.classList.contains("x1")
    ? 1
    : draggedShip.classList.contains("x2")
    ? 2
    : draggedShip.classList.contains("x3")
    ? 3
    : 4;
  let newThis = this;
  newThis.classList.add("shipPart_1");
  for (let i = 2; i <= shipLength; i++) {
    if (draggedShip.style.flexDirection === "row") {
      newThis.nextElementSibling.classList.add(`shipPart_${i}`);
      newThis = newThis.nextElementSibling;
    } else {
      const nextElement = document.getElementById(+activeSq + 10 * (i - 1));
      nextElement.classList.add(`shipPart_${i}`);
    }
  }
  this.classList.remove("over");

  const counterElem =
    draggedShip.parentNode.nextElementSibling.querySelector(".ships_counter");
  counterElem.textContent--;
}

// if (draggedShip.style.flexDirection === "row") {
//   if (draggedShip.classList.contains("x1")) {
//     this.classList.add("shipPart_1");
//   } else if (draggedShip.classList.contains("x2")) {
//     this.classList.add("shipPart_1");
//     this.nextElementSibling.classList.add("shipPart_2");
//   } else if (draggedShip.classList.contains("x3")) {
//     this.classList.add("shipPart_1");
//     this.nextElementSibling.classList.add("shipPart_2");
//     this.nextElementSibling.nextElementSibling.classList.add("shipPart_3");
//   } else {
//     this.classList.add("shipPart_1");
//     this.nextElementSibling.classList.add("shipPart_2");
//     this.nextElementSibling.nextElementSibling.classList.add("shipPart_3");
//     this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
//       "shipPart_4"
//     );
//   }
// } else {
//   if (draggedShip.classList.contains("x1")) {
//     this.classList.add("shipPart_1");
//   } else if (draggedShip.classList.contains("x2")) {
//     this.classList.add("shipPart_1");
//     document.getElementById(+activeSq + 10).classList.add("shipPart_2");
//   } else if (draggedShip.classList.contains("x3")) {
//     this.classList.add("shipPart_1");
//     document.getElementById(+activeSq + 10).classList.add("shipPart_2");
//     document.getElementById(+activeSq + 20).classList.add("shipPart_3");
//   } else {
//     this.classList.add("shipPart_1");
//     document.getElementById(+activeSq + 10).classList.add("shipPart_2");
//     document.getElementById(+activeSq + 20).classList.add("shipPart_3");
//     document.getElementById(+activeSq + 30).classList.add("shipPart_4");
//   }
// }
