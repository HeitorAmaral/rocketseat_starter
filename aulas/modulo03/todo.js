var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  "Fazer café",
  "Estudar JavaScript",
  "Acessar comunidade da RocketSeat",
];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var position = todos.indexOf(todo);

    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("onclick", "removeTodo(" + position + ")");
    var linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

buttonElement.onclick = addTodo;

function addTodo() {
  var todoText = inputElement.value;
  if (todoText.trim() == "") {
    alert("É necessário inserir algum valor no nome no Todo!");
  } else {
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
  }
}

function removeTodo(position) {
  todos.splice(position, 1);
  renderTodos();
}
