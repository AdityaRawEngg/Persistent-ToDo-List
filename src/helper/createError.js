export const createError = (name, message) => {
  const customError = new Error();
  customError.name = name;
  customError.message = message;
  return customError;
};
