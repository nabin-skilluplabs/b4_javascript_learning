class ToDoItem {
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
  }
}

let toDoList = [];

function handleFormSubmit(event) {
  event.preventDefault();
  const value = document.querySelector('form input').value;
  if (value) {
    const toDoItem = new ToDoItem(value);
    toDoList.unshift(toDoItem);

    renderToDoList();
    clearInput();
    updateTotal();
  }
}

function updateTotal() {
  document.querySelector('#count').innerHTML = toDoList.length;
}

function clearInput() {
  document.querySelector('form input').value = '';
}

function renderToDoList() {
  const ul = document.querySelector('ul');
  const liHTML = toDoList.map((item, index) => {
    const li = `<li ${item.isCompleted ? "class='completed'" : ''} >${
      item.title
    } <span><input ${
      item.isCompleted && 'checked'
    } type="checkbox" data-index="${index}" /> <button>X</button></span></li>`;
    return li;
  });
  ul.innerHTML = liHTML.join('');

  const checkboxArray = document.querySelectorAll('input[type="checkbox"]');

  checkboxArray.forEach((checkbox) =>
    checkbox.addEventListener('click', toggleCheckbox)
  );
}

function toggleCheckbox(event) {
  let index = event.target.dataset.index;
  toDoList = toDoList.map((todo, i) => {
    if (i == index) {
      todo.isCompleted = !todo.isCompleted;
    }
    return todo;
  });
  renderToDoList();
}

document
  .querySelector('form button')
  .addEventListener('click', handleFormSubmit);
