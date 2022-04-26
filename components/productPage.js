import React from "react";
export function Page(props){
    return(
    <div>
    <img src={props.image}></img>
    <h3 className="Name">{props.name}</h3>
    <h3 className="price">${props.price}</h3>
    <p className="Script">{props.description}</p>
    <button type="button">
            Add to cart
        </button>
        
    </div>
    
    
   
     
    );
}