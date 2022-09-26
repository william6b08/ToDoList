// the functionality of the todo List

// 1. creation of new todo as object, use function factory maybe?)

// 1.1 inside the task object, there are numbers of properties that you should include

// title, description, dueDate, priority, notes and checklist

// 2. change todo as completed

// 3. change todo priority

// 4. add todo to a project

// 5. expend a todo to see details

// 6.  delete todo from a project

import { toDoCreator } from "./todocreator";

import createToDoDOM from "./dom_update";

const submitBtn = document.getElementById('Create-Todo');

const LIST = [];

submitBtn.addEventListener('click', ()=>LIST.push(toDoCreator()));

submitBtn.addEventListener('click', function(){createToDoDOM(LIST)});

