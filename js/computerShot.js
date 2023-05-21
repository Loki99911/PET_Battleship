import gunAction from "./gunAction.js";

const computerShot = () => {
  const shotId = Math.round(Math.random() * 99 + 1);
  const sqwereElement = document.getElementById(shotId);
  const yourGunElement = document.querySelector(".enemyGun");
  const yourBallElement = yourGunElement.nextElementSibling;

  if (sqwereElement.childNodes.length > 0) {
    return computerShot();
  }

  gunAction(sqwereElement, yourGunElement, yourBallElement);
  const shipAvailab =
    sqwereElement.classList.contains("shipPart");

  const result = document.createElement("img");

  result.src = shipAvailab ? "./../img/shoted.png" : "./../img/dot.png";
  result.alt = shipAvailab ? "shoted" : "missed";
  result.width = shipAvailab ? 30 : 20;

  sqwereElement.append(result);
  if (shipAvailab) {
    setTimeout(() => {
      computerShot();
    }, 1400);
  }
};

export default computerShot;
