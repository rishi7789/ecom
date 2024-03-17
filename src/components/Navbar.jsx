import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import '../index.css'

const Navbar = () => {

  const navigate = useNavigate();
  
const handleLogout = ()=>{
  localStorage.removeItem("authtoken");
  navigate("/login");
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">
            E-COM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/"> Home </Link>
             </li>
              
              {/* ternary operator */}
             {(localStorage.getItem("authtoken")) ?
             <li className="nav-item">
             <div>
              <Link className="btn bg-white text-success mx-3" aria-current="page" to="/cart">My cart</Link>
            </div>
          </li>  : "" }

            </ul>
            {!(localStorage.getItem("authtoken")) ?
            <div className="d-flex">
            <Link className="btn bg-white text-success mx-1" aria-current="page" to="/login">login</Link>
            <Link className="btn bg-white text-success mx-1" aria-current="page" to="/register">register</Link>
            </div>
            :
            <div>
              <div className="btn bg-white text-danger mx-3" onClick={handleLogout}>Logout</div>
            </div> }
              
        </div> 
        </div>
      </nav>
    </>
  );
};

export default Navbar;
