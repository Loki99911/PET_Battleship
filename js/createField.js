const createField = (fieldName, classes, numberOfFields) => {
  const sqweres = [];
  const inputField = document.querySelector(`.${fieldName}`);
  const startNum = fieldName === "yourField" ? 1 : 101;
  const finishNum = startNum + numberOfFields;
    for (let i = startNum; i <= finishNum; i++) {
      const sqwere = document.createElement("div");
      sqwere.classList.add(...classes);
      sqwere.id = i;
      sqweres.push(sqwere);
    }
  inputField.append(...sqweres);
};
export default createField;