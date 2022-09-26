const toDoCreator = function(){

  const toDoName = document.getElementById('Name').value;

  const description = document.getElementById('Description').value;

  let priorityLevel = document.getElementById('Priority-Level').value;

  let isCompleted = false;
  const changeCompletion = function(){
    isCompleted != isCompleted
  }
  return {toDoName, description, priorityLevel, isCompleted, changeCompletion}
}


const toDoArray = (function(){
  let toDos = [];
  const addToDo = function(){
    toDos.push(toDoCreator());
  }

  const getToDoList = function() {return toDos};

  return {addToDo, getToDoList}
})()
export {toDoCreator};