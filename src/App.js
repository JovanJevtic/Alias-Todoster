import React, {useState, useEffect} from 'react';
import './App.css';

import githubLogo from './github-logo.svg';

import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {

  const LS_KEY = "react-todo-list-todos";

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  function toggleCompleted(id) {
    setTodos(
      todos.map(todo => {
        
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LS_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      
      <div className="content">

        <header>
          <div className="container header-wrapp">
            <p className="logo">Alias Todoster</p>
          </div>
        </header>

        <div className="gap"></div>

        <div className="main">

          <div className="main-wrapp container">
            
            <TodoForm addTodo={addTodo} />
            <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />

          </div>

        </div>

        <div className="footer container">

          <div className="footer-block">
            <a href="https://jovanjevtic.netlify.app/" >CEO</a>
          </div>

          <div className="footer-block">
            <img className="footer-icon" src={githubLogo} alt="github"></img>
          </div>

          <div className="footer-block">
            <a href="#">Alias</a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
