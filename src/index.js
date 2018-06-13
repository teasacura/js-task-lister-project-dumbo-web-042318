document.addEventListener('DOMContentLoaded', init)

function init() {
  const form = document.querySelector("#create-list-form")

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    App.createList()
    App.checkRenderTask()
  })

  document.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(e.target.id === "create-task-form"){
      const listId = document.querySelector("option:checked").dataset.listId
      const newTaskDescription = document.querySelector("#new-task-description").value
      const newTaskPriority = document.querySelector("#new-task-priority").value
      let selectedList = List.find(listId);
      renderTask(selectedList, newTaskDescription, newTaskPriority)

    }
  })
}

function renderTask(selectedList, newTaskDescription, newTaskPriority) {
  const tasksUl = document.querySelector(`[data-ul-id="${selectedList.id}"]`)
  const newTask = new Task(selectedList, newTaskDescription, newTaskPriority)
  const newTaskHTML = newTask.taskHTML()
  tasksUl.innerHTML += newTaskHTML
}


document.addEventListener('click', (e) => {

  if (e.target.className === "delete-list") {
    e.target.parentElement.parentElement.remove()
    let deleteList = List.find(e.target.dataset.listId)
    let index = List.all().indexOf(deleteList)
    List.all().splice(index, 1)
    App.checkRenderTask();
  }
})
