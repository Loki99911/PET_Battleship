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
        !yourShipsDown.length === 20 && alert("you Win!");
        !enemyShipsDown.length === 20 && alert("you Lose!");
      }
 }
export default whoWins;