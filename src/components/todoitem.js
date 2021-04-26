import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function TodoItem({todo,todos,setTodos,seteditTodo}) {

// Deleting todo

const onDelete = ({Sno}) =>
  {
    setTodos(todos.filter((todo)=>
    {
      return todo.Sno!==Sno
    }))
    localStorage.setItem('todos',JSON.stringify(todos));
  }


// Editing todo

  const onEdit = ({Sno}) =>
  {
    let findTodo = todos.find((todo)=>todo.Sno === Sno)
    seteditTodo(findTodo);
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  // updating todo status

  const handleComplete = ({Sno}) => {
    let mapped = todos.map(task => {
      return task.Sno === Sno ? { ...task, completed: !task.completed } : { ...task};
    });
    setTodos(mapped);
    localStorage.setItem('todos',JSON.stringify(todos))
  }

    return (
      <>
 
      <h5 className={todo.completed? "strike" : ""}><span>{todo.Sno}.</span> {todo.title}</h5>
      <p className={todo.completed ? "strike" : ""}>{todo.desc}</p>
      <button type="button" class="btn btn-success float-left" onClick ={()=>{handleComplete(todo)}}>Completed</button>
      <button type="button" class="btn btn-primary ml-3" onClick ={()=>{onEdit(todo)}}>Edit</button>
      <button type="button" class="btn btn-danger ml-3" onClick ={()=>{onDelete(todo)}}>Delete</button>
      
      </>
    )
  }

  export default TodoItem;