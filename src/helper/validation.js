import { createError } from "./createError.js";

export const isEmpty = (description) => {
  // try {
  description = description.trim();
  if (description.length != 0) {
    return true;
  } else {
    throw createError("InvalidError", "Task cannot be empty");
  }
};
export const isTag = (description) => {
  if (description.includes("<")) {
    throw createError("InvalidError", "Task cannot contain '<'");
  } else {
    return true;
  }
};
// export const isEmpty = (description) => {};
// export const isEmpty = (description) => {};

const validationFunList = [isEmpty, isTag];
export const validation = (description) => {
  return validationFunList.every((fun) => {
    return fun(description);
  });
};
