import gunAction from "./gunAction.js";

const doShot = (event) => {
  const sqwereElement = event.target;
  const yourGunElement = document.querySelector(".yourGun");
  const yourBallElement = yourGunElement.nextElementSibling;
 
  gunAction(sqwereElement, yourGunElement, yourBallElement);

  event.target.classList.remove("shadow");
};
export default doShot;
