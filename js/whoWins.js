import stopGame from "./stopGame.js";

const whoWins = () => {
  const yourField = document.querySelector(".yourField");
  const yourShips = yourField.querySelectorAll(".shipPart");
  const enemyField = document.querySelector(".enemyField");
  const enemyShips = enemyField.querySelectorAll(".shipPart");
  const yourShipsDown = [];
  const enemyShipsDown = [];
  yourShips.forEach((ship) => {
    if (ship.hasChildNodes()) {
      yourShipsDown.push(ship);
    }
  });
  enemyShips.forEach((ship) => {
    if (ship.hasChildNodes()) {
      enemyShipsDown.push(ship);
    }
  });

  if (yourShipsDown.length === 20 || enemyShipsDown.length === 20) {
    const yourScore = document.getElementById("yourScore");
    const enemyScore = document.getElementById("enemyScore");
    yourShipsDown.length === 20 && enemyScore.textContent++;
    enemyShipsDown.length === 20 && yourScore.textContent++;
    stopGame();
  }
};
export default whoWins;
