import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm() {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const redirect = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://task-manager-tcxk.onrender.com/tasks/create`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({
                title:title,
                description:description,
                
            })
        }).then((res)=>{
            if(res.ok){
                console.log(res)
                redirect('/list')
                return res.json()
            }else{
                console.log(res)
            }
        })
    }
    return  (
        <div className="container">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title:</label>
        <input type="text" name="title" className="form-control"  id="" placeholder='Enter title' value={title} onChange={e=>setTitle(e.target.value)}/>
        <label htmlFor="description">description:</label>
        <textarea className="form-control" name='description' value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>

        <button type="submit" >Save</button>
      </form>
    </div>
    )

     
}

export default TaskForm;


