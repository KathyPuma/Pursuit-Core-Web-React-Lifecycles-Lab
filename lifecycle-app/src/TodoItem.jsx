import React from "react"

class TodosList extends React.Component {
    render() {
        const { todoMessage } = this.props
        return (
            <li>{todoMessage}<button onClick={this.props.handleDeleteButton}>Delete</button></li>
        )
        
    }
}
export default TodosList