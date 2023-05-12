const createField = (fieldName, classes, numberOfFields) => {
  const sqweres = [];
  const inputField = document.querySelector(`.${fieldName}`);

  for (let i = 1; i <= numberOfFields; i++) {
    const sqwere = document.createElement("div");
    sqwere.classList.add(...classes);
    sqwere.id = i;
    sqweres.push(sqwere);
  }
  inputField.append(...sqweres);
};
export default createField;