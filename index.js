// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,

    description: description,

    complete: false,

    logState: function()  {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function()  {
      this.complete = true;
    },
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask(`Clean cat litter`, `Take all the cat business out of the litter box`);
const task2 = newTask(`Do Laundry`, `Run the washing machine`);
const tasks = [task1, task2];


task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
