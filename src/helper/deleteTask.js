import { taskObject } from "./addTask.js";

export const deleteTask = (event) => {
  taskObject.find((taskList, index) => {
    if (event.target.parentElement.id == taskList.taskId) {
      return taskObject.splice(index, 1);
    }
  });
  localStorage.setItem("taskList", JSON.stringify(taskObject));
  event.target.parentElement.remove();
};
