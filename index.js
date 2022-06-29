// todo app process
// 1. UI for "Add a todo item"
// 2. Display new todo item together with the other todo lists
//    - javascript function for handling add todo item field
//    - update the UI for the new item.
// 3. Remove a todo item
// 4. Update a todo item
// 5. Update status of todo item to "DONE"

var num = 0

// ADD NEW TODO ITEM FUNCTION
function addNewTodoItem() {
  // get todo item value
  let todoItem = document.querySelector("#add-todo-item-field").value

  // append logic
  let todoListWrapper = document.querySelector(".todo-list-wrapper")
  let elementId = num++
  const todoElement = `
    <div 
      class="todo-item-container"
      id="todo-item-${elementId}"
    >
      <input type="text" value=${todoItem}>
      <button type="text" id="delete-btn" onclick="deleteTodoItem(${elementId})">Delete</button>
    </div>
  `

  // insert new element to HTML
  todoListWrapper.insertAdjacentHTML('beforeend', todoElement)
  document.querySelector("#add-todo-item-field").value = ""
}

// DELETE TODO ITEM FUNCTION
function deleteTodoItem(elementId) {
  let todoItem = document.querySelector(`#todo-item-${elementId}`)
  todoItem.remove()
}
