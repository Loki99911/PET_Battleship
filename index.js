const dragItem = document.querySelectorAll(".ship");
const dragFild = document.querySelector(".yourFild");

console.log(dragItem);
console.log(dragFild);

function dragstart_handler(e) {
  console.log(e);
//   ev.dataTransfer.setData("text/plain", ev.target.id);
}

// window.addEventListener("DOMContentLoaded", () => {
//   [...dragItem][1].addEventListener("dragstart", dragstart_handler);
// });

[...dragItem][0].addEventListener("dragstart", dragstart_handler);
