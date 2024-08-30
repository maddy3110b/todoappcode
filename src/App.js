
import { useEffect, useState } from "react";
import './index.css';
import Todo from "./components/todo"
import { addtodo, getalltodo ,updatetodo,deletetodo} from "./utils/handleapi";
function App() {
  const [toDo, setToDo]= useState([])
  const [text, setText]=useState("")
  const [isupdating,setIsUpdate]=useState(false)
  const [todoid, setTodoid]=useState("")


  useEffect(()=> {
    getalltodo(setToDo)
  }, [])

  const edit=(_id,text)=>{
    setIsUpdate(true)
    setText(text)
    setTodoid(_id)
  }

  return (
    <div className="App">
  <div className="container">
    <h1>
      TODO APP
    </h1>
    <div className="top">
      <input type="text" placeholder="Add task"
      value={text} onChange={(e)=>setText(e.target.value)}/>
      <div className="add" onClick={isupdating? ()=> updatetodo(todoid,text,setToDo, setText, setIsUpdate)
        :()=>addtodo(text,setText,setToDo)}>
         {isupdating?  "Update":"Add"}</div>

    </div>
    <div className="list">
      {toDo.map((item) => 
      <Todo 
      key={item._id} 
      text={item.text}
      edit={() =>edit(item._id, item.text)} 
      deletetodo={()=>deletetodo(item._id, setToDo)}/>)}  
      
    </div>

  </div>
      
    </div>
  );
}

export default App;
