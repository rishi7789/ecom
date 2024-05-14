import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function Register() {
  
      const[name,setName] = useState()
      const[email,setEmail] = useState()
      const[phone,setPhone] = useState()
      const[password,setPassword] = useState()

      
  let navigate = useNavigate();

  

    const handleSubmit= (e)=>{
           e.preventDefault();
           axios.post('${window.location.origin}/register',{name,email,phone,password})
           .then(result => console.log(result))
           .then(result => alert("Registered successfully"))
           .then(result => navigate('/login'))
           .catch(err => console.log(err))
    }



  return (
  <>
<Navbar/>

  <div className='container mt-5' style={{ width: "500px",alignContent:"center",justifyContent:"center"}}>

  <form onSubmit={handleSubmit}>

  <div className="form-group mb-3">
    <h1>Registration page</h1>
    <label htmlFor="username">Name</label>
    <input type="text" className="form-control"  name='name' onChange={(e)=> setName(e.target.value)}/>
  </div>

  <div className="form-group mb-3">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control"  name='email'  onChange={(e)=> setEmail(e.target.value)} />
  </div>

  <div className="form-group mb-3">
    <label htmlFor="phoneno">Phone No</label>
    <input type="number" className="form-control"  name='phone'  onChange={(e)=> setPhone(e.target.value)}/>
  </div>

  <div className="form-group mb-3">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" name='password'   onChange={(e)=> setPassword(e.target.value)} />
  </div>

  <button type="submit" className="m-3 btn btn-success">Submit</button>
  
 <Link to='/login' className='m-3 btn btn-danger'>Already a user?</Link>
</form>
</div>


  </>
  )
}

export default Register
