import React, {useState, useEffect} from 'react';
import './Todo.css';

import close from '../close.svg';
import checkbox from '../checkbox.svg';
import checkboxChecked from '../checkbox-checked.svg';

const Todo = ({ todo, toggleCompleted, deleteTodo }) => {

    function handleCheckbox () {
        toggleCompleted(todo.id);
        if (todo.completed === true) {
            setCheckboxIcon(checkbox);
        } else {
            setCheckboxIcon(checkboxChecked);
        }
    }

    useEffect(() => {
        checkForIcon();
    }, [])

    function checkForIcon() {
        if (todo.completed === true) {
            setCheckboxIcon(checkboxChecked);
        }   else {
            setCheckboxIcon(checkbox);
        }
    }
   
    function handleDelete () {
        deleteTodo(todo.id);
    }

    const [checkboxIcon, setCheckboxIcon] = useState(checkbox);

    return( 
        <div className="todo">

            <div className="todo-wrapp1">
                <p className="todo-txt" style={{ textDecoration: todo.completed ? 'line-through red' : null }} >{todo.task}</p>
            </div>  

            <div className="todo-wrapp2">
                <img onClick={handleCheckbox} className="todo-icon" src={checkboxIcon} alt="checkbox"></img>
                <img onClick={handleDelete} className="todo-icon" src={close} alt="close"></img>
            </div>

        </div>
    );
}

export default Todo;