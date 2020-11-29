import { taskObject } from "./addTask.js";
export const completeTask = (event) => {
  if (event.target.checked) {
    taskObject.find((task) => {
      if (task.taskId == event.target.parentElement.parentElement.id) {
        task.status = "completed";
      }
    });
    localStorage.setItem("taskList", JSON.stringify(taskObject));
    event.target.nextSibling.innerHTML = event.target.nextSibling.innerHTML.strike();
    event.target.remove();
  }
};
