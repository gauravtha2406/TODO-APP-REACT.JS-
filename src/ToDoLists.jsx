import React from "react";
import "./index.css";

const ToDoLists=(props)=>{
return(<>
 <div className="ToDo_style">
 <i className= "fa fa-times" onClick={()=>{props.onSelect(props.id)}}/>
 <li>{props.text}</li>
 </div>
 </>
)
}

export default ToDoLists;