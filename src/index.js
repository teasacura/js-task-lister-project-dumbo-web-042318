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
    console.log(e.target.id)
    if(e.target.id === "create-task-form"){
      const listId = document.querySelector("option:checked").dataset.listId
      const newTaskDescription = document.querySelector("#new-task-description").value
      const newTaskPriority = document.querySelector("#new-task-priority").value
      let selectedList = List.find(listId);

      // render/create new Task
      const tasksUl = document.querySelector(`[data-ul-id="${selectedList.id}"]`)
      const newTask = new Task(selectedList, newTaskDescription, newTaskPriority)
      const newTaskHTML = newTask.taskHTML()
      tasksUl.innerHTML += newTaskHTML
    }
  })
}


//
//
// });
//
// document.addEventListener('click', (e) => {
//   if (e.target.className === "delete-list") {
//     e.target.parentElement.parentElement.remove()
//     divContent.innerHTML = taskFormHTML;
//   }
// })
