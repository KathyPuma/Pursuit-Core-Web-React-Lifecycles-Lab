import React from "react"
import TodoItem from "./TodoItem.jsx"

class TodoList extends React.Component {
  // super(props)

  handleDeleteButton = (event) => {
    const { todoId, handleDeleteTodo } = this.props
    handleDeleteTodo(todoId)
  }

  render() {
    return (
      <TodoItem
        todoMessage={this.props.todoMessage}
        handleDeleteButton={this.handleDeleteButton}
      />
    )
  }
}
export default TodoList



