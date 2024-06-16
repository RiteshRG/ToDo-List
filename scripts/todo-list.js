const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: '',
  dueDate: '',
  time: ''
  }];

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject,index) => {
  const{ name,dueDate,time } = todoObject;
  const html = `
  <div class="task-list">
  <div class="task-items">${name}</div>
    <div class="task-items">${dueDate}</div>
    <div class="task-items">${time}</div>
    <button class="delect-todo-button js-delete-todo-button">Delete</button>
  </div>
    `;
  todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML

   document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton,index) => {
      console.log(deleteButton,index);
      deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            saveTOLocalStorage();
            renderTodoList();
        });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-dueDate-input');
  const dueDate = dateInputElement.value;
  const timeElement = document.querySelector('.js-time-input');
  const time = timeElement.value;

  todoList.push({//name: name,
    //dueDate: dueDate
    name, dueDate,time});
    saveTOLocalStorage()

  inputElement.value = '';
  renderTodoList();
}

function saveTOLocalStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}