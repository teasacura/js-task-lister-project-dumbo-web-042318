const List = (function createListClass() {
let id = 0
const allTasks = [];
const all = [];
  return class List {
      constructor(title) {
        this.id = ++id
        this.title = title
        all.push(this)
      }

      static tasks(){
        return allTasks
      }

      listHTMLTemplate() {
        return `
        <div>
          <h2>${this.title}
            <button data-title="${this.title}" class="delete-list">
              X
              </button>
          </h2>
            <ul data-ul-id="${this.id}">
            </ul>
          </div>
          `
      }

      static all(){
        return all
      }

      static find(id){
        return all.find(list => list.id === parseInt(id, 10))
      }

    }
})()
