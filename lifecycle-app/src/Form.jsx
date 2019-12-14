import React from "react"

const Form = (props) => {
   
    return (
        <div className="form">
            <form onSubmit={props.handFormSubmit}>
                <input
                type = "text"
                    placeholder="Enter a todo"
                    value={props.todoMessage}
                    onChange={props.handleTodoMessage}
                    
                ></input>
            </form>

        </div>
    )
}



export default Form

