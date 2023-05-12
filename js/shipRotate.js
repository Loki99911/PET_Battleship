const shipRotate = () => {
  const ship_x1 = document.querySelector(".ship.x1");
  const ship_x2 = document.querySelector(".ship.x2");
  const ship_x3 = document.querySelector(".ship.x3");
  const ship_x4 = document.querySelector(".ship.x4");
  const rotateBtn_x2 = document.querySelector("#rotate_x2");
  const rotateBtn_x3 = document.querySelector("#rotate_x3");
  const rotateBtn_x4 = document.querySelector("#rotate_x4");

  rotateBtn_x2.addEventListener("click", () => {
    rotate(ship_x2);
  });
  rotateBtn_x3.addEventListener("click", () => {
    rotate(ship_x3);
  });
  rotateBtn_x4.addEventListener("click", () => {
    rotate(ship_x4);
  });

  function rotate(ship) {
    if (ship.style.flexDirection === "column") {
      ship.style.flexDirection = "row";
    } else {
      ship.style.flexDirection = "column";
    }
  }
}

export default shipRotate;