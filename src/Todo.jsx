import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo (){
    let [List,updtList]=useState([{task:"1MG payment",id:uuidv4(),isDone:false}]);
    let [newTodo,chgTodo]=useState([]);
    function addtask(){
        updtList((PreList)=>[...PreList,{task:newTodo.toUpperCase(),id:uuidv4(),isDone:false}]);
        chgTodo("");
    }
    function handleChg(event){
        chgTodo(event.target.value);
    }
    function deleteTask(id){
        updtList(List.filter((e)=>e.id!=id));
        
    }
    function markDone(id){
        updtList(List.map((e)=>{
            if(e.id==id){
           return {...e,isDone:true};}
           else {
            return e; 
        }
        }));
     
    }

    return (
        <div>
        <h1>Todo App</h1>
        <hr></hr>
        <input type="text" placeholder="Work to add" value={newTodo} onChange={handleChg}/>
        <button onClick={addtask}>Add</button>
        <hr />
        <ul>
            {List.map((e)=><li key={e.id} ><span style={e.isDone?{textDecorationLine: 'line-through'}:{}}>{e.task} </span>&nbsp;&nbsp;  <button onClick={()=>deleteTask(e.id)}>Delete</button><button onClick={()=>markDone(e.id)}>Mark as Done</button></li>)}
        </ul>
        </div>
    );
}
export default Todo;