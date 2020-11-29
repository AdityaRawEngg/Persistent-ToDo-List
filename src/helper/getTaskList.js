import { taskObject } from "./addTask.js";
import { newTask } from "../markup/newtask.js";

export const addTaskList = () => {
  if (localStorage.getItem("taskList")) {
    JSON.parse(localStorage.getItem("taskList")).forEach((task) => {
      taskObject.push(task);
    });
  }
  taskObject.forEach((task) => {
    document.getElementById("taskList").appendChild(newTask(task));
  });
  //   console.log(taskObject);
};
