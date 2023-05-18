const btnDisabled = () => {
  const counterX1 = +document.querySelector(".x1 .ships_counter").textContent;
  const counterX2 = +document.querySelector(".x2 .ships_counter").textContent;
  const counterX3 = +document.querySelector(".x3 .ships_counter").textContent;
  const counterX4 = +document.querySelector(".x4 .ships_counter").textContent;
  const startBtn = document.querySelector(".startBtn");
  const randomBtn = document.querySelector(".randomShipBtn");

  const value =
    +counterX1 + counterX2 + counterX3 + counterX4 === 0 ? true : false;
  startBtn.disabled = !value;
  randomBtn.disabled = value;
};
export default btnDisabled;
