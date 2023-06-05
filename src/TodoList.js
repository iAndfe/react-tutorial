import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], newTodoText: "" };

    this.addTodo = this.addTodo.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  addTodo() {
    const todo = { id: Date.now(), text: this.state.newTodoText };
    this.setState((state) => ({
      todos: state.todos.concat(todo),
      newTodoText: "",
    }));
  }

  handleTextChange(event) {
    this.setState({ newTodoText: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTodoText}
          onChange={this.handleTextChange}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
