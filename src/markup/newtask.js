import { completeTask } from "../helper/completeTask.js";
import { deleteMarkup } from "./deleteMarkup.js";

export const newTask = (taskObject) => {
  const li = document.createElement("li");
  //   li.id = taskObject.taskId;
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("displayRow");
  const taskPara = document.createElement("p");
  const input = document.createElement("input");
  input.name = "taskList";
  input.type = "checkbox";
  li.id = taskObject.taskId;
  taskPara.innerHTML = taskObject.description;
  if (taskObject.status != "completed") {
    taskDiv.appendChild(input);
  }
  taskDiv.appendChild(taskPara);
  li.appendChild(taskDiv);
  if (taskObject.status == "completed") {
    taskPara.innerHTML = taskPara.innerHTML.strike();
    li.appendChild(deleteMarkup());
  }

  input.addEventListener("click", (event) => {
    event.preventDefault();
    completeTask(event);
    li.appendChild(deleteMarkup());
  });
  return li;
};
