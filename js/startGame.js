import shipAriaSelect from "./shipAriaSelect.js";
import shipPut from "./shipPut.js";

const startGame = () => {
  const dropField = document.querySelector(".enemyField");
  const ships = [4, 3, 3];

  // const putEnemyShip = (length) => {
  //   const shipDirection = Math.round(Math.random()) === 0 ? "row" : "column";
  //   const shipId = Math.round(Math.random() * 100);
  //   const activeElem = document.getElementById(shipId);
  //   const shipOnDesk = shipPut(length, shipDirection, activeElem, dropField);
  //   console.log(shipOnDesk);
  // };

  ships.map((shipLength) => {
    let shipOnDesk = false;
    while (!shipOnDesk) {
      const shipDirection = Math.round(Math.random()) === 0 ? "row" : "column";
      const shipId = Math.round(Math.random() * 100);
      const activeElem = document.getElementById(shipId);
      shipAriaSelect(shipDirection, shipId, shipLength, "shipAria", "add");
      shipOnDesk = shipPut(shipLength, shipDirection, activeElem, dropField);
      console.log(shipOnDesk);
    }
    //   shipAriaSelect(shipDirection, shipId, length, "shipAria", "add");
    // putEnemyShip(shipLength);
  });
};
export default startGame;
