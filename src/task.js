const Task = (function createTaskClass() {
let id = 0
let all = [];
  return class Task {
    constructor(list, description, priority) {
      this.id = ++id
      this.description = description
      this.priority = priority
      this.list = list
      all.push(this)
    }

    taskHTML() {
      return `
      <li>
        Task: ${this.description}
        <button data-list-title="${this.list.title}" data-task-name="${this.description}" class="delete-task">
            X
        </button>
        <br>
        Priority: ${this.priority}
      </li>
      `
    }

    static all() {
      return all
    }
  }

})()
