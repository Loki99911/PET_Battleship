import doShot from "./doShot.js";

const stopGame = () => {
    const enemySqweres = document.querySelectorAll(".enemySqwere");
     enemySqweres.forEach((enemySqwere) => {
         enemySqwere.removeEventListener("click", doShot);
         enemySqwere.classList.remove("shadow");
     });
}
export default stopGame;