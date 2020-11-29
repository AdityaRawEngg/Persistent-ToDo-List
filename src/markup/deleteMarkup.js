import { deleteTask } from "../helper/deleteTask.js";

export const deleteMarkup = () => {
  const deleteImg = document.createElement("img");
  deleteImg.src = "https://img.icons8.com/cotton/2x/delete-sign--v2.png";
  deleteImg.alt = "Delete Image";
  deleteImg.classList.add("deleteImage");
  deleteImg.addEventListener("click", (event) => {
    event.preventDefault();
    deleteTask(event);
  });
  return deleteImg;
};
