import doShot from "./doShot.js";

const stopGame = () => {
  const enemySqweres = document.querySelectorAll(".enemySqwere");
  const gunsWrapper = document.querySelector(".gunsWrapper");
  const scoreWrapper = document.querySelector(".scoreWrapper");
  enemySqweres.forEach((enemySqwere) => {
    enemySqwere.removeEventListener("click", doShot);
    enemySqwere.classList.remove("shadow");
  });
  gunsWrapper.addEventListener(
    "transitionstart",
    () => {
      gunsWrapper.style.zIndex = "-1";
    },
    true
  );
  gunsWrapper.classList.remove("afterStart");
    scoreWrapper.classList.add("getScore");
    
};
export default stopGame;
