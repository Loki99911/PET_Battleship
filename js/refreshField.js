import createField from "./createField.js";

const refreshField = (fieldName, classes, numberOfFields) => {
  const field = document.querySelector(`.${fieldName}`);
  while (field.firstChild) {
    field.firstChild.remove();
    }
    createField(fieldName, classes, numberOfFields);
};
export default refreshField;