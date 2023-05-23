import gunAction from "./gunAction.js";

const yourShot = (sqwereElement) => {
  const yourGunElement = document.querySelector(".yourGun");
  const yourBallElement = yourGunElement.nextElementSibling;

  if (!sqwereElement.classList.contains("shadow")) {
    return true;
  }

  const enemyFieldAction = () => {
    const shipAvailab = sqwereElement.classList.contains("shipPart");
    sqwereElement.classList.remove("shadow");
    const result = document.createElement("img");
    result.src = shipAvailab ? "./img/shoted.png" : "./img/dot.png";
    result.alt = shipAvailab ? "shoted" : "missed";
    result.width = shipAvailab ? 30 : 20;
    sqwereElement.append(result);
    return shipAvailab;
  };

  const shotResult = gunAction(
    sqwereElement,
    yourGunElement,
    yourBallElement,
    enemyFieldAction
  );
  
  if (shotResult) {
    return true;
  }
};
export default yourShot;
