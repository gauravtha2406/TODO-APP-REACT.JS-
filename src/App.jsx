import React, { useState } from "react";
import "./index.css";
import ToDoLists from "./ToDoLists";

const App=()=>{

    const[inputList , setInputList]=useState("");
    const[items, setItems]=useState([]);

    const itemEvent= (e)=>{
    setInputList(e.target.value);
    }

    const listOfitems=()=>{
      // here we are returning and storing the values in array items 
      setItems((oldItems)=>{
        return[...oldItems,inputList]
      })
      // for emptying the input field
      setInputList("");
    }

     
    const deleteitems=(id)=>{
      // console.log("deleted");
      setItems((oldItems)=>{
        return oldItems.filter((arrItems,index)=>{
        return index!==id;
        })
      })
    }

    return(<>
    <div className="main_div">
      <div className="inner_div">
          
          <h2>TO-DO LIST</h2>
          <br/>
         <input type="text" placeholder="ADD YOUR ITEM" className="input_div" onChange={itemEvent} value={inputList}/>
       <button onClick={listOfitems}>+</button>
       <br/>
        <ol>
            {/* calling array */}
            {items.map((itemVal,index)=>{
              
               return <ToDoLists text={itemVal} key={index} id={index} onSelect={deleteitems}/>
            })}
           
        </ol>

      </div>
     

    </div>
    
    
    
    
    
    </>);

}

export default App;