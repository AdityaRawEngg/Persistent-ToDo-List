import { taskConstructor } from "./taskConstructor.js";
import { newTask } from "../markup/newtask.js";
import { validation } from "./validation.js";
import { errorMessage } from "./errorMessage.js";

export const taskObject = [];
export const addTask = (event) => {
  event.preventDefault();
  try {
    validation(event.target.task.value);
    localStorage.clear();
    taskObject.push(new taskConstructor(event.target.task.value));
    document
      .getElementById("taskList")
      .appendChild(newTask(taskObject[taskObject.length - 1]));
    localStorage.setItem("taskList", JSON.stringify(taskObject));
    // });
  } catch (error) {
    errorMessage(event, error);
  }
  event.target.task.value = "";
};
