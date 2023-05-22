import computerShot from "./computerShot.js";
import gunAction from "./gunAction.js";
import stopGame from "./stopGame.js";
import whoWins from "./whoWins.js";
import yourShot from "./yourShot.js";

const doShot = (event) => {
  let winner = null;
  const sqwereElement = event.target;

  const brake = yourShot(sqwereElement);

  whoWins();
  
  if (brake) return;

  setTimeout(() => {
    computerShot();
    whoWins();
  }, 700);

};
export default doShot;
