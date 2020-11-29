export const taskConstructor = function (description) {
  this.taskId = faker.random.uuid();
  this.description = description;
  this.status = "not-Completed"; //True = not complete
  // this.creationTime = new date();
};
