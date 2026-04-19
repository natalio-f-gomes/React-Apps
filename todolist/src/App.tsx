import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';


//Basics
let name: any;
let age:number;
let isStudent: boolean;
let hobbies: string[];
let role:[number,string];
type Person = {
  name: string,
  age?: number
}

let person: Person ={
  name: "Natalio",
  age:24
}

let students: Person[];

let isAlive: string | boolean

let printName: (name:string)=>void;


type Professor = {
  name: string;
  age: number;
}
type Student = Professor & {
  gpa: number;
}

let student1:Student = {
      gpa: 3.5,
      name: "Natalio",
      age: 45
}

function App1() {
  return (
    <div className='App'>Hello World</div>
  );
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.SyntheticEvent) => {
      e.preventDefault();
      if(todo){
        setTodos([...todos,{id:Date.now(),todo,isDone:false}])
        setTodo("")
      }
  }
  console.log(todos)
  return (
    <div className='App'>
      <span className="heading">TodoList</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {todos.map((t)=>(
        <li>{t.todo}</li>
      ))}
    </div>
    
  );
}

export default App;
 