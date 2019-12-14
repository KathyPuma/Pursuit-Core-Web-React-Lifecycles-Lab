import React from 'react';
import Form from "./Form.jsx"
import TodosList from "./TodosList.jsx"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todosList: [],
      todoMessage: "",
      todoId: 0

    }
  }

  handFormSubmit = (event) => {
    event.preventDefault()
    const { todosList, todoMessage, todoId } = this.state

    let newTodos = todosList
    newTodos.push({
      todoMessage: todoMessage,
      todoId: todoId +  1
    })

    this.setState({
      todosList: newTodos,
      todoMessage: "",
      todoId: todoId + 1
    })
  }

  handleTodoMessage = (event) => {
    this.setState({
      todoMessage: event.target.value
    })
  }

  handleDeleteTodo = (deleteTodoId) => {
    const { todosList } = this.state
    let newTodosFilter = todosList.filter(todo => todo.todoId !== deleteTodoId)
    this.setState({
      todosList: newTodosFilter,
    })

  }


  render() {
    const { todosList, todoMessage,todoId} = this.state
    // console.log(this.state)
    console.log(todosList)
    // console.log(this.state.todoId)
  
    return (
      <div className="App">
        <Form
          todoMessage={todoMessage}
          handleTodoMessage={this.handleTodoMessage}
          handFormSubmit={this.handFormSubmit}
        />
        {<ul className="todosList">
          {todosList.map(todo =>
            <TodosList
              key={todo.todoId}
              todoId={todo.todoId}
              todoMessage={todo.todoMessage}
              handleDeleteTodo={this.handleDeleteTodo}
            />)}
        </ul>}
      </div>
    );
  }

}

export default App;



