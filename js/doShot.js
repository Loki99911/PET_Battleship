import computerShot from "./computerShot.js";
import gunAction from "./gunAction.js";

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
};
export default doShot;
