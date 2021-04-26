import React,{useEffect,useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function AddTodo({addTodo,edittodo,seteditTodo,todos,setTodos,todo}) {

const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")

// updating edited todo

const updateTodo = (Sno,title,desc,completed)=>
{

      const newTodo = todos.map((todo)=>
      todo.Sno === Sno ? {Sno , title,desc,completed}:todo
      );
     
      setTodos(newTodo);
      seteditTodo("");
      localStorage.setItem('todos',JSON.stringify(todos));  
}

useEffect(()=>
{
  if(edittodo)
  {
    setTitle(edittodo.title);
    setDesc(edittodo.desc);
  }else{
    
    setTitle("");
    setDesc("");
  }

},[setTitle,setDesc,edittodo])

// Submitting todo

const submit = (e) =>
{
  e.preventDefault();
  if(!edittodo)
  {
    if(!title || !desc)
    {
      alert('Title and description cannot be empty....')
    }
    else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
    
    }
  }else{
    updateTodo(  edittodo.Sno,title, desc, edittodo.completed)
  }
  
}

 return (
<div className="container my-3">
    <h3 >Add a todo</h3>
<form onSubmit = {submit}>
  <div className="form-group">
    <label for="title">Todo Title : </label>
    <input type="text" className="form-control" placeholder="Enter your todo here..." value={title} onChange={(e)=>setTitle(e.target.value)} id="title" />
  </div>
  <div className="form-group">
    <label for="desc">Todo description : </label>
    <input type="text" className="form-control" placeholder="Enter your todo description here..." value={desc} onChange={(e)=>setDesc(e.target.value)}  id="desc"/>
  </div>
  {
    edittodo ? <button type="submit" className="btn btn-info btn-sm">Update</button> :<button type="submit" className="btn btn-dark btn-sm">Add todo</button> 
  }
 
</form>
</div>
    
 
  )
}

export default  AddTodo;
