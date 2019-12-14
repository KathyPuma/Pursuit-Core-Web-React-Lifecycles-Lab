import React from "react"

class TodosList extends React.Component {
  

  handleDeleteButton = (e) => {
    const { todoId, handleDeleteTodo } = this.props
    handleDeleteTodo(todoId)
  }

  render() {
    const { todoMessage } = this.props

    console.log(this.props)
    return <li>{todoMessage}<button onClick={this.handleDeleteButton}>Delete</button></li>
  }
}



export default TodosList



