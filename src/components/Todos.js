import React from 'react';
import Todo from './Todo';

import './Todo.css';

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
    return(
        <div className="todos">
            <ul className="todos-list">
                { todos.map(todo => (
                    <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
                )) }
            </ul>
        </div>
    );
}

export default Todos;