import React,{useState} from "react";
import Home from "../pages/Home";
import Cart from '../pages/Cart'


function Card({productname,price,image,handleClick}) {
  
  return (
    <>
      <div className="card mt-5 mr-5" style={{ width: "350px" , height: "350px", overflow:" hidden" }}>
        <img className="card-img-top" src={image} alt="Card image cap" style={{ width: "350px" , height: "350px", overflow:" hidden" }} />
        <div className="card-body">
          <h5 className="card-title">{productname}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <div className="d-inline fs-5">{price}</div>
            <button className="m-2 text-white bg-success" onClick={()=>handleClick({productname,price})} >Add to Cart</button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
