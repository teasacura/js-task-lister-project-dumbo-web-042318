class App {
  static createList() {
      const inputBox = document.querySelector("#new-list-title");
      const newList = new List(inputBox.value);
      const listHTML = newList.listHTMLTemplate();
      document.querySelector("#lists").innerHTML += listHTML;
   }

  static renderTaskForm() {
      const divContent = document.querySelector("#app-content");
      let taskFormHTML = TaskLister.renderTaskForm();
      divContent.innerHTML = taskFormHTML;
  }

  static checkRenderTask() {
    if (List.all().length === 0) {
      console.log("i'm in empty")
      divContent.innerHTML = ''
    } else {
      App.renderTaskForm()
    }
  }

}
