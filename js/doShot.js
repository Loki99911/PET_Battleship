import computerShot from "./computerShot.js";
import gunAction from "./gunAction.js";
import stopGame from "./stopGame.js";
import whoWins from "./whoWins.js";
import yourShot from "./yourShot.js";

const doShot = (event) => {
  let winner = null;
  const sqwereElement = event.target;

  const brake = yourShot(sqwereElement);

  winner = whoWins();
  if (winner === "you") {
    return alert("you Win!");
  }

  if (brake) return;
console.log("next ");
  setTimeout(() => {
    computerShot();
    winner = whoWins();
    if (winner === "enemy") {
      return alert("you Lose!");
    }
  }, 700);

  //Закончить логику проиграша!!!!!
  // const yourField = document.querySelector(".yourField");
  // const yourShips = yourField.querySelectorAll(".shipPart");
  // const enemyField = document.querySelector(".enemyField");
  // const enemyShips = enemyField.querySelectorAll(".shipPart");
  // const yourShipsDown = [];
  // const enemyShipsDown = [];
  // yourShips.forEach((ship) => {
  //   if (ship.hasChildNodes()) {
  //     yourShipsDown.push(ship);
  //   }
  // });
  // enemyShips.forEach((ship) => {
  //   if (ship.hasChildNodes()) {
  //     enemyShipsDown.push(ship);
  //   }
  // });

  // if (yourShipsDown.length === 20 || enemyShipsDown.length === 20) {
  //   !yourShipsDown.length === 20 && alert("you Win!");
  //   !enemyShipsDown.length === 20 && alert("you Lose!");
  // }
};
export default doShot;
