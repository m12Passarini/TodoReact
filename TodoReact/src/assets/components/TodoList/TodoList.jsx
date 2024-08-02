import React from 'react'
import PropTypes from 'prop-types'

import { MdDelete } from "react-icons/md";

import './styles.css'

const TodoList = ({ todos, classToggle, removeTodo }) => (

    <ul className="list">
        {todos.map((todo) => (
            <li key={todo.id.toString()}>
                <span 
                    onClick={() => classToggle && classToggle(todo)}
                    className={["todo", todo.checked ? "checked" : ""].join(" ")}
                >{todo.content}</span>
                <button className="remove" onClick={() => removeTodo && removeTodo(todo)}>
                    <MdDelete size={28} ></MdDelete>
                </button>
            </li>
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    classToggle: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
}

export default TodoList;