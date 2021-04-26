import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './todoitem.js'

function TodoList({todos,setTodos,seteditTodo}) {
  
 const mystyle = {
  minheight:"100vh",
  margin : "40px auto"
}


  return (
      <div className="container" style={mystyle}>
      <h4 className=" my-3" > Todo List </h4>
      { todos.length !==0 ?
          todos.map((todo)=> {return (
          <>
           <TodoItem key = {todo.Sno} todo={todo} todos={todos} setTodos={setTodos} seteditTodo={seteditTodo} />
           <hr/>
           </>
          )
           }):"No todos found!!!"
      }
     </div>
    )
  }
  

export default TodoList;