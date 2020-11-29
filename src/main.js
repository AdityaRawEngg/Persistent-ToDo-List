import { addTask } from "./helper/addTask.js";
import { addTaskList } from "./helper/getTaskList.js";

window.onload = () => {
  addTaskList();
  document.forms.userInput.addEventListener("submit", addTask);
};
