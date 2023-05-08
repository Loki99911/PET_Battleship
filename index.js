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
  if (this.lastElementChild.textContent === "0") return; //додумать логику
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
  // console.log(this.getAttribute("id"));
  if (draggedShip.style.flexDirection === "row") {
    if (draggedShip.classList.contains("x1")) {
      this.classList.add("shipPart_1");
    } else if (draggedShip.classList.contains("x2")) {
      this.classList.add("shipPart_1");
      this.nextElementSibling.classList.add("shipPart_2");
    } else if (draggedShip.classList.contains("x3")) {
      this.classList.add("shipPart_1");
      this.nextElementSibling.classList.add("shipPart_2");
      this.nextElementSibling.nextElementSibling.classList.add("shipPart_3");
    } else {
      this.classList.add("shipPart_1");
      this.nextElementSibling.classList.add("shipPart_2");
      this.nextElementSibling.nextElementSibling.classList.add("shipPart_3");
      this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "shipPart_4"
      );
    }
  } else {
    if (draggedShip.classList.contains("x1")) {
      this.classList.add("shipPart_1");
    } else if (draggedShip.classList.contains("x2")) {
      this.classList.add("shipPart_1");
      document.getElementById(+activeSq + 10).classList.add("shipPart_2");
    } else if (draggedShip.classList.contains("x3")) {
      this.classList.add("shipPart_1");
      document.getElementById(+activeSq + 10).classList.add("shipPart_2");
      document.getElementById(+activeSq + 20).classList.add("shipPart_3");
    } else {
      this.classList.add("shipPart_1");
      document.getElementById(+activeSq + 10).classList.add("shipPart_2");
      document.getElementById(+activeSq + 20).classList.add("shipPart_3");
      document.getElementById(+activeSq + 30).classList.add("shipPart_4");
    }
  }
  this.classList.remove("over");

  const counterElem =
    draggedShip.parentNode.nextElementSibling.firstElementChild
      .firstElementChild;
  console.log(counterElem.textContent);
  counterElem.textContent--;
}
