import computerShot from "./computerShot.js";
import gunAction from "./gunAction.js";
import stopGame from "./stopGame.js";

const doShot = (event) => {
  const sqwereElement = event.target;
  const yourGunElement = document.querySelector(".yourGun");
  const yourBallElement = yourGunElement.nextElementSibling;

  gunAction(sqwereElement, yourGunElement, yourBallElement);
  const shipAvailab =
    event.target.classList.contains("shipPart_1") ||
    event.target.classList.contains("shipPart_2") ||
    event.target.classList.contains("shipPart_3") ||
    event.target.classList.contains("shipPart_4");
  
  const result = document.createElement("img");

  result.src = shipAvailab ? "./../img/shoted.png" : "./../img/dot.png";
  result.alt = shipAvailab ? "shoted" : "missed";
  result.width = shipAvailab ? 30 : 20;
  event.target.classList.remove("shadow");
  event.target.append(result);
  if (shipAvailab) {
    return;
  }
  setTimeout(() => {
    computerShot();
  }, 700);
  
  const yourField = document.querySelector(".yourField");
  const yourShips = yourField.querySelectorAll(".shipPart");
  const enemyField = document.querySelector(".enemyField");
  const enemyShips = enemyField.querySelectorAll(".shipPart");
  let yourShipsLeft = false;
  let enemyShipsLeft = false;
  yourShips.forEach((ship) => {
    if (!ship.hasChildNodes()) {
      yourShipsLeft = true;
    }
  });
  enemyShips.forEach((ship) => {
    if (!ship.hasChildNodes()) {
      enemyShipsLeft = true;
    }
  });
  console.log(yourShipsLeft, enemyShipsLeft);

  if (yourShipsLeft || enemyShipsLeft) {
    console.log("result");
    yourShipsLeft && alert("you Win!");
    !yourShipsLeft && alert("you Lose!");
    // stopGame();
  }
};
export default doShot;
