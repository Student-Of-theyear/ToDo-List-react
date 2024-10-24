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

  let list = todolist.map((value, index) => {
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
      todolist={todolist} 
      setTodolist={setTodolist} />
      
    )
  })

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toName"/> <button>Save</button>
      </form>
      <div className="outerDiv">
      <ul>
          {list}
      </ul>
      </div>

    </div>
  );
}

export default App;

function ToDoListItems({value, indexNumber,todolist,setTodolist}) {
  let [status, setStatus]=useState(false)

  let deleteRow = () => {
    // alert(indexNumber)
    let finalData = todolist.filter((v,i) => i != indexNumber)
    // console.log(finalData)
    setTodolist(finalData)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>    
  )
}
