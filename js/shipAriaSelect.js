const shipAriaSelect = (
  direction,
  startSquere,
  shipLength,
  className,
  func
) => {
  const maxSquere = startSquere <= 100 ? 100 : 200;
  const minSquere = startSquere <= 100 ? 1 : 101;
  const minFieldVert = startSquere <= 100 ? 10: 110;
  if (direction === "row") {
    const startFor = startSquere % 10 === 1 ? startSquere : startSquere - 1;
    const endFor =
      startSquere + shipLength > Math.ceil(startSquere / 10) * 10
        ? Math.ceil(startSquere / 10) * 10
        : startSquere + shipLength;
    for (let i = startFor; i <= endFor; i++) {
      func === "add"
        ? i - 10 >= minSquere &&
          document.getElementById(i - 10).classList.add(className)
        : i - 10 >= minSquere &&
          document.getElementById(i - 10).classList.remove(className);
      func === "add"
        ? i >= minSquere &&
          i <= maxSquere &&
          document.getElementById(i).classList.add(className)
        : i >= minSquere &&
          i <= maxSquere &&
          document.getElementById(i).classList.remove(className);
      func === "add"
        ? i + 10 <= maxSquere &&
          document.getElementById(i + 10).classList.add(className)
        : i + 10 <= maxSquere &&
          document.getElementById(i + 10).classList.remove(className);
    }
  } else {
    const startFor =
      startSquere <= minFieldVert ? startSquere : startSquere - 10;
    const endFor =
      startSquere + shipLength * 10 > maxSquere
        ? startSquere + Math.floor((maxSquere - startSquere) / 10) * 10
        : startSquere + shipLength * 10;
    for (let i = startFor; i <= endFor; i = i + 10) {
      func === "add"
        ? (i - 1) % 10 !== 0 &&
          document.getElementById(i - 1).classList.add(className)
        : (i - 1) % 10 !== 0 &&
          document.getElementById(i - 1).classList.remove(className); //---???---
      func === "add"
        ? i >= minSquere &&
          i <= maxSquere &&
          document.getElementById(i).classList.add(className)
        : i >= minSquere &&
          i <= maxSquere &&
          document.getElementById(i).classList.remove(className);
      func === "add"
        ? i % 10 !== 0 &&
          document.getElementById(i + 1).classList.add(className)
        : i % 10 !== 0 &&
          document.getElementById(i + 1).classList.remove(className); //---???---
    }
  }
};
export default shipAriaSelect;
