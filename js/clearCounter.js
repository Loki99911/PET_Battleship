const clearCounter = () => {
  for (let i = 1; i <= 4; i++) {
    const shipDesk = document.querySelector(`.shipDesk.x${i}`);
    const shipCounter = shipDesk.querySelector(".ships_counter");
    shipCounter.textContent = 0;
  }
};
export default clearCounter;
