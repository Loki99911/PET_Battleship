const shipAriaSelect = (draggedShip, startSquere, shipLength, className, func)=> {
  if (draggedShip.style.flexDirection === "row") {
    const startFor = startSquere % 10 === 1 ? startSquere : startSquere - 1;
    const endFor =
      startSquere + shipLength > Math.ceil(startSquere / 10) * 10
        ? Math.ceil(startSquere / 10) * 10
        : startSquere + shipLength;
    for (let i = startFor; i <= endFor; i++) {
      func === "add"
        ? i - 10 > 0 && document.getElementById(i - 10).classList.add(className)
        : i - 10 > 0 &&
          document.getElementById(i - 10).classList.remove(className);
      func === "add"
        ? i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.add(className)
        : i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.remove(className);
      func === "add"
        ? i + 10 <= 100 &&
          document.getElementById(i + 10).classList.add(className)
        : i + 10 <= 100 &&
          document.getElementById(i + 10).classList.remove(className);
    }
  } else {
    const startFor = startSquere <= 10 ? startSquere : startSquere - 10;
    const endFor =
      startSquere + shipLength * 10 > 100
        ? startSquere + Math.floor((100 - startSquere) / 10) * 10
        : startSquere + shipLength * 10;
    console.log(startFor, endFor);
    for (let i = startFor; i <= endFor; i = i + 10) {
      func === "add"
        ? (i - 1) % 10 !== 0 &&
          document.getElementById(i - 1).classList.add(className)
        : (i - 1) % 10 !== 0 &&
          document.getElementById(i - 1).classList.remove(className);
      func === "add"
        ? i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.add(className)
        : i > 0 &&
          i <= 100 &&
          document.getElementById(i).classList.remove(className);
      func === "add"
        ? i % 10 !== 0 &&
          document.getElementById(i + 1).classList.add(className)
        : i % 10 !== 0 &&
          document.getElementById(i + 1).classList.remove(className);
    }
  }
}
export default shipAriaSelect;