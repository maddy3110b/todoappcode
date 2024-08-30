import axios from "axios"

const baseUrl ="https://todoappbackend-7eea.onrender.com"
const getalltodo = (setToDo) =>{
    axios.get(baseUrl)
    .then(({data})=>
    {
        console.log("data", data);
        setToDo(data)
    })
}

const addtodo =( text,setText, setToDo)=>{
    axios.post(`${baseUrl}/save`, {text})
    .then((data)=>{
        console.log(data);
        setText("")
        getalltodo(setToDo)

    })

}
const updatetodo =( todoid, text, setToDo, setText, setIsUpdate)=>{
    axios.post(`${baseUrl}/edit`, {_id:todoid,text})
    .then((data)=>{

        
        setText("")
        setIsUpdate(false)
        getalltodo(setToDo)

    })

}
const deletetodo =( _id, setToDo)=>{
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data)=>{

        
        
        getalltodo(setToDo)

    })

}
export {getalltodo, addtodo,updatetodo,deletetodo}