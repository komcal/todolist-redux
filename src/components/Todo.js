import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, onRemove }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer'
    }}
  >
    <p
      onClick={onClick}
      style={{
        display:'inline',
        marginRight: '20px'
      }}
    >
      {text}
    </p>
    <button onClick={onRemove}>delete</button>
  </li>
)

Todo.propType = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
