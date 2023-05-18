import addRandomShips from "./addRandomShips.js";
import btnDisabled from "./btnDisabled.js";
import clearCounter from "./clearCounter.js";

const addUserShips = () => { 
    const dropField = document.querySelector(".yourField");
    addRandomShips(dropField);
    clearCounter();
    btnDisabled();
}
export default addUserShips;