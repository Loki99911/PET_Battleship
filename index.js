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
  e.preventDefault();
  const startSquere = +this.getAttribute("id");
  if (draggedShip.style.flexDirection === "row") {
    const startFor = startSquere % 10 === 1 ? startSquere : startSquere - 1;
    const endFor =
      startSquere + shipLength > Math.ceil(startSquere / 10) * 10
        ? startSquere + shipLength - 1
        : startSquere + shipLength;
    console.log();
    for (let i = startFor; i <= endFor; i++) {
      i - 10 >= 0 && document.getElementById(i - 10).classList.add("over"); //"-"верхнее поле
      i > 0 && i <= 100 && document.getElementById(i).classList.add("over");
      i + 10 <= 100 && document.getElementById(i + 10).classList.add("over"); //"-"нижнее поле
    }
  } else {
  }
  // this.classList.add("over");
}

function dragEnter(e) {
  if (!draggedShip) return;
  e.preventDefault();
  // this.classList.add("over");
}

function dragLeave() {
  if (!draggedShip) return;
  const startSquere = +this.getAttribute("id");
  if (draggedShip.style.flexDirection === "row") {
    const startFor = startSquere % 10 === 1 ? startSquere : startSquere - 1;
    const endFor =
      startSquere + shipLength > Math.ceil(startSquere / 10) * 10 //7+4>    (2)
        ? startSquere + shipLength - 1
        : startSquere + shipLength;
    for (let i = startFor; i <= endFor; i++) {
      i - 10 >= 0 && document.getElementById(i - 10).classList.remove("over"); //"-"верхнее поле
      i > 0 && i <= 100 && document.getElementById(i).classList.remove("over");
      i + 10 <= 100 && document.getElementById(i + 10).classList.remove("over"); //"-"нижнее поле
    }
  } else {
  }
  console.log(this);

  // this.classList.remove("over");
}

function drop(e) {
  const activeSq = this.getAttribute("id");
  if (!draggedShip) return;
  let newThis = this;

  if (
    +activeSq + shipLength - 1 > Math.ceil(+activeSq / 10) * 10 &&
    draggedShip.style.flexDirection === "row"
  ) {
    return this.classList.remove("over");
  }

  if (
    +activeSq + (shipLength - 1) * 10 > 100 &&
    draggedShip.style.flexDirection === "column"
  ) {
    return this.classList.remove("over");
  }

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
  // console.log(tempBusySq);
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
