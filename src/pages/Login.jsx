import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function Login() {

  const[email,setEmail] = useState()
  const[password,setPassword] = useState()

  let navigate = useNavigate();


const handleSubmit= (e)=>{
       e.preventDefault();
       axios.post('http://localhost:5000/login',{email,password})
       .then(result =>{ console.log(result)
       localStorage.setItem("authtoken",result.data.token)})
      .then(result => console.log(localStorage.getItem("authtoken")))
       .then(result => navigate('/'))
       .catch(err => console.log(err))
}

  return (
    <>
    <Navbar/>
    <div className='container mt-5' style={{ width: "500px",alignContent:"center",justifyContent:"center"}}>

      <h1>Login page</h1>

    <form onSubmit={handleSubmit}>
    
    <div className="form-group mb-3">
      <label htmlFor="email">Email </label>
      <input type="email" className="form-control"  name='email'  onChange={(e)=> setEmail(e.target.value)} />
    </div>

    <div className="form-group mb-3">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" name='password'   onChange={(e)=> setPassword(e.target.value)} />
    </div>

    <button type="submit" className="m-3 btn btn-success">Submit</button>

   <Link to='/register' className='m-3 btn btn-danger'>Don't have account-Register</Link>
  </form>
  </div>



    </>
  )
}

export default Login