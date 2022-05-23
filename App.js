import React from "react";
import { TaskApp} from "./TaskApp";
import { v4 as uuid } from "uuid";
import './App.css';

function App() {
  const [query, setQuery] = React.useState("");
  const[todos,setTodo] = React.useState([]);
  const handleAdd =()=>{
    const payload ={
      title: query,
      status: false,
      id: uuid(),
    }
    setTodo([...todos, payload]);
  };
  const [counter, setCounter,color] = React.useState(0);
  const handleIncrement=(value)=>{
    setCounter(counter+value);
  };
  const handleDelete=(id)=>{
    let updateditem = todos.filter(item=> item.id !==id)
    setTodo(updateditem);
  };
  return (
    <div className="App">
      <h1>TodoList</h1>
      <div>
        <input class="task" 
        value ={query}
        onChange={(e)=>setQuery(e.target.value)}
        type="text"
        placeholder="Add Task..."
        />
        <button class="add" onClick={handleAdd}>+</button>
      </div>
  
        <h2>{counter}</h2>
        <button onClick={()=>handleIncrement(1)}>+</button>
        <button onClick={()=>handleIncrement(-1)}>-</button>
      
      <div class="div"> 
        {todos.map((item)=>{
          return (
            <TaskApp handleDelete={handleDelete} key={item.id} {...item}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
