import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Saisie from './Saisie';
import ListTodo from './ListTodo';

const App = () => {
  const [todos, setTodos] = useState(window.localStorage.getItem("My todo's app") ? JSON.parse(window.localStorage.getItem("My todo's app")) : []);
  //const [checked, setChecked] = useState(false);

  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), todo, completed: false }]);
  }

  function checkHandler(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
   }

  useEffect(() => {
    window.localStorage.setItem("My todo's app", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header />
      <Saisie addTodo={addTodo} />
      <ListTodo todos={todos} checkHandler={checkHandler} />
    </div>
  );
};

export default App;