import React,{useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ToDoList';
import ToDoList from './ToDoList';

function App() {
  const[inputList,setInputList]=useState();

  const[items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
      setItems((oldItems)=>{
        return [...oldItems,inputList] 
      })
      setInputList("");
  };

  const deleteItem=(id)=>{
        console.log("deleted");
        setItems((oldItems=>{
          return oldItems.filter((arrElem,index)=>{
            return index!==id;
          })
        }))
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add an Items" 
         value={inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
        <ol>
        
          {
            items.map((itemval,index)=>{
              return <ToDoList
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItem}
               />;
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
