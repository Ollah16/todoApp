import './App.css';
import { Route, Routes } from 'react-router-dom';
import HandleNewTodo from './myTodos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  let [allTodos, setTodo] = useState('')

  const handleAddTodo = (newTodo) => {
    setTodo([...allTodos, newTodo])
  }

  const handleChanges = (type, todoId, newTodo) => {
    let myTodos = [...allTodos]

    switch (type) {
      case 'edit':
        myTodos[todoId].editTodo = true
        break;
      case 'save':
        let { newTodoTitle, newTodoDate, newTodoTime } = newTodo
        if (newTodoTitle && newTodoDate && newTodoTime) {
          myTodos[todoId].todoTitle = newTodoTitle
          myTodos[todoId].todoDate = newTodoDate
          myTodos[todoId].todoTime = newTodoTime
          myTodos[todoId].todoDone = false
          myTodos[todoId].editTodo = false
        }
        break;
      case 'delete':
        myTodos = myTodos.filter((todo) => todo.id != todoId)
        break;
      case 'done':
        myTodos[todoId].todoDone = true
        break;
      case 'undone':
        myTodos[todoId].todoDone = false
        break;
      case 'cancel':
        myTodos[todoId].editTodo = false
        break;
    }

    setTodo(myTodos)
  }

  return (
    <Routes>
      <Route path='/' element={<HandleNewTodo handleAddTodo={handleAddTodo} allTodos={allTodos} handleChanges={handleChanges} />} />
    </Routes >
  );
}

export default App;
