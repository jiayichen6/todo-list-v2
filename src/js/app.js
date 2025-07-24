import axios from "axios";

const formControl = () => {
  return {
    todoList: [
      { id: 0, content: "111", editing: false, completed: false },
      { id: 1, content: "222", editing: false, completed: false },
    ],
    newTodoContent: "",

    addNewTodo() {
      if (this.newTodoContent.trim() === "") {
        this.newTodoContent = "";
        return;
      }
      const newtodo = { content: this.newTodoContent.trim(), editing: false };

      this.todoList.unshift(newtodo);
      this.newTodoContent = "";
      console.log(this.todoList);
    },

    editTodo(todo) {
      if (todo.completed) return;
      todo.editing = true;
    },

    finisheditingTodo(todo) {
      todo.editing = false;
    },

    deleteTodo(todoId) {
      console.log(todoId);
      this.todoList.splice(todoId, 1);
    },

    isCompleted(todo) {
      todo.completed = !todo.completed;
    },
  };
};

export { formControl };
