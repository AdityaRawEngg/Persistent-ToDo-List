const span = document.createElement("span");

export const errorMessage = (event, error) => {
  span.innerHTML = error.message;
  event.target.task.insertAdjacentElement("afterend", span);
  event.target.task.placeholder = error.message;
  setTimeout(() => {
    span.remove();
    event.target.task.placeholder = "Please Enter New Task";
  }, 3000);
};
