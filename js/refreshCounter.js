const refreshCounter = () => {
  for (let i = 1; i <= 4; i++) {
    const shipDesk = document.querySelector(`.shipDesk.x${i}`);
    const shipCounter = shipDesk.querySelector(".ships_counter");
    shipCounter.textContent = 5 - i;
  }
};
export default refreshCounter;
