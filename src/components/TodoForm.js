import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Todo.css';

const TodoForm = ({addTodo}) => {
   
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleInputChange = (e) => {
        setTodo({...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return(
        <form className="form" onSubmit={handleSubmit} >
            <input className="form-input" onChange={handleInputChange} value={todo.task} name="task" type="text" placeholder="Add task" />
            <button className="form-button" type="submit" >Submit</button>
        </form>
    );

}

export default TodoForm;