import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function Signup() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [full_name, setFull_name] = useState('')

    const redirect = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
    
       fetch("https://task-manager-tcxk.onrender.com/register",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                
                full_name:full_name,
                email:email,
                password_hash:password
            })
        }).then((res)=>{
            if(res.ok){
                console.log()
                redirect("/login")

                return res.json()
            }else{
                throw new Error('Email already exists')
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">full_name</label>
    <input type="text" name="full_name" class="form-control"  value={full_name} onChange={e=>setFull_name(e.target.value)}/>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control"  value={email} onChange={e=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password_hash" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
    )

}

export default Signup;