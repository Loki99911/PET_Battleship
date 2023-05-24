const startFlag = () => {
  const headerElem = document.querySelector("header");
  const mainElem = document.querySelector("main");
  const footerElem = document.querySelector("footer");

  headerElem.style.height = "100px";
  footerElem.style.height = "100px";
  headerElem.addEventListener("transitionend", () => {
      mainElem.style.height = "100%";
      mainElem.style.opacity = 1;
      
  });
};
export default startFlag;
