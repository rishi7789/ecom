import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({handleClick}) => {



const [search,setSearch] = useState('')
const [productcat,setProductcat] = useState([])
const [productlist,setProductlist] = useState([])

const loadData = async ()=>{
    let response = await fetch("http://localhost:5000/product",{
      method: "POST",
      headers :{
        "Content-Type": "application/json"
      }
    })
    response = await response.json();
    // console.log(response[0],response[1]);

    setProductlist(response[0])
    setProductcat(response[1])
}

useEffect(()=>{
    loadData();
},[])       


  return (
    <div>
     <div> <Navbar /> </div>

<div>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" id="carousel">
        
          <div className="carousel-caption" style={{ zIndex: "10" }}>

            <div className="d-flex justify-content-center">
                 
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900x700/"
              style={{ filter: "brightness(30%" }}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900x700/"
              style={{ filter: "brightness(30%" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900x700/"
              style={{ filter: "brightness(30%" }}
              alt="Third slide"
            />
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleControls"
          role="button"
          data-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </Link>
        </div>
</div>
      
    
    
      <div>
      <div className="container">
        {
          //using ternary operator
          productcat !==[] ?
          productcat.map((data)=>{
            return(
              <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr />

              {productlist !==[]?
                productlist.filter((list)=> (list.CategoryName === data.CategoryName) && (list.name.toLowerCase().includes(search.toLowerCase()))  )
                .map(items =>{
                  return(
                    <div key={items._id} className="col-12 col-md-6 col-lg-3"> <Card productname={items.name}  price={items.price} image={items.img} handleClick={handleClick}> </Card>  </div>
                  )
                  }) : <div>No data found</div>
                }
          </div>
             )
          }) : "No data found"
        }
      </div>
      </div>
 
 
    
      


      <div> <Footer/> </div>
    </div>
  );
};

export default Home;
