import shipPut from "./shipPut.js";

const startGame = () => {
  const dropField = document.querySelector(".enemyField");
  const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

  const putEnemyShip = (length) => {
    const shipDirection = Math.round(Math.random()) === 0 ? "row" : "column";
    const shipId = Math.round(Math.random() * 100);
    const activeElem = document.getElementById(shipId);
    const shipOnDesk = shipPut(length, shipDirection, activeElem, dropField);
    console.log(shipOnDesk);
  };

  ships.map((shipLength) => {
    putEnemyShip(shipLength);
  });
};
export default startGame;
