const ships = document.querySelectorAll(".ship");
const sqweres = document.querySelectorAll(".yourSqwere");
const dropField = document.querySelector(".yourField");
const rotateBtn = document.querySelector("#rotate");
// const aaa = document.getElementById(50);
// console.log(aaa);

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

// dropField.addEventListener("dragover", dragOver);
// dropField.addEventListener("dragenter", dragEnter);
// dropField.addEventListener("dragleave", dragLeave);
// dropField.addEventListener("drop", drop);

let draggedShip = null;

function dragStart(e) {
  draggedShip = this;
}

function dragEnd() {
  draggedShip = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function drop(e) {
  const activeSq = this.getAttribute("id");
  // console.log("drop", e);
  // e.target.classList.add("ship")
  // this.appendChild(draggedShip);
  console.log(this.getAttribute("id"));
  // switch (this.getAttribute("id")) {
  //   case "x2":
  //     this.classList.add("shipPart");
  //     this.nextElementSibling.classList.add("shipPart");
  //     break;
  //   case "x3":
  //     this.classList.add("shipPart");
  //     this.nextElementSibling.classList.add("shipPart");
  //     this.nextElementSibling.nextElementSibling.classList.add("shipPart");
  //     break;
  //   case "x4":
  //     this.classList.add("shipPart");
  //     this.nextElementSibling.classList.add("shipPart");
  //     this.nextElementSibling.nextElementSibling.classList.add("shipPart");
  //     this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
  //       "shipPart"
  //     );
  //     break;

  //   default:
  //     this.classList.add("shipPart");
  //     break;
  // }
  if (draggedShip.style.flexDirection === "row") {
    if (draggedShip.classList.contains("x1")) {
      this.classList.add("shipPart");
    } else if (draggedShip.classList.contains("x2")) {
      this.classList.add("shipPart");
      this.nextElementSibling.classList.add("shipPart");
    } else if (draggedShip.classList.contains("x3")) {
      this.classList.add("shipPart");
      this.nextElementSibling.classList.add("shipPart");
      this.nextElementSibling.nextElementSibling.classList.add("shipPart");
    } else {
      this.classList.add("shipPart");
      this.nextElementSibling.classList.add("shipPart");
      this.nextElementSibling.nextElementSibling.classList.add("shipPart");
      this.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        "shipPart"
      );
    }
  } else {
    if (draggedShip.classList.contains("x1")) {
      this.classList.add("shipPart");
    } else if (draggedShip.classList.contains("x2")) {
      this.classList.add("shipPart");
      document.getElementById(+activeSq + 10).classList.add("shipPart");
    } else if (draggedShip.classList.contains("x3")) {
      this.classList.add("shipPart");
      document.getElementById(+activeSq + 10).classList.add("shipPart");
      document.getElementById(+activeSq + 20).classList.add("shipPart");
    } else {
      this.classList.add("shipPart");
      document.getElementById(+activeSq + 10).classList.add("shipPart");
      document.getElementById(+activeSq + 20).classList.add("shipPart");
      document.getElementById(+activeSq + 30).classList.add("shipPart");
    }
    
  }

  //   const paintSqer = document.querySelector(`#${sqer}`);
  // this.classList.add("shipPart"); //закомитить
  this.classList.remove("over");
}

rotateBtn.addEventListener("click", rotate);
function rotate() {
  ships.forEach((ship) => {
    if (ship.style.flexDirection === "column") {
      ship.style.flexDirection = "row";
    } else {
      ship.style.flexDirection = "column";
    }
  });
  console.log("dddd");
}
