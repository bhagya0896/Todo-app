import React ,{useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js'
import AddTodo from './components/todoform.js'
import TodoList from './components/todolist.js'
import Footer from './components/footer.js'


import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {

  let initTodo;

  if(localStorage.getItem('todos')===null)
  {
      initTodo = [];
  }else{
      initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  
  // Adding todos to todo list

    const addTodo = (title,desc) =>
    {
      let Sno;
    if(todos.length === 0)
    {
      Sno = 1;
    }
    else{
    Sno = todos[todos.length-1].Sno + 1
    }
      const myTodo = {
        Sno : Sno,
        title : title,
        desc : desc,
        completed:false
      }
      console.log(myTodo)
   setTodos([...todos,myTodo])
   
    }

    let [todos,setTodos] = useState(initTodo);
    let [edittodo,seteditTodo] = useState(null);

    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' >
            <>
              <AddTodo addTodo={addTodo}  todos={todos} setTodos={setTodos} edittodo={edittodo} seteditTodo={seteditTodo} />
              <TodoList todos={todos} setTodos={setTodos} edittodo={edittodo} seteditTodo={seteditTodo} />
            </>
          </Route>
        
        </Switch>
        <Footer />
      </Router>
     </>
  );
}

export default App;
