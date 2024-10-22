import logo from './logo.svg';
import './App.css';

function App() {
  let saveToDoList=(event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" /> <button>Save</button>
      </form>

    </div>
  );
}

export default App;
