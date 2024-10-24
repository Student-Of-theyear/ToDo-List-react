import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([])

  let saveToDoList=(event) => {

    let toName = event.target.toName.value;

    if(!todolist.includes(toName)){
      let finalToDolist=[...todolist,toName]
      setTodolist(finalToDolist)

    }else {
      alert("ToDo Name Allready Exists...")
    }

    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toName"/> <button>Save</button>
      </form>

    </div>
  );
}

export default App;
