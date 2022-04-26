import React from "react";

export function Format(props){
    function event(){

        
    const data = {
        image : props.image,
        name : props.name,
        price: props.price,
        description: props.description
    };
    props.setProduct(data);
    props.pageView(true);
    }
    return(
    <div>
    <img src={props.image}></img>
    <h3 className="Name">{props.name}</h3>
    <h3 className="price">${props.price}</h3>
    <div className="View">
        <button type="button" onClick={event}>
            View Item
        </button>
        
    </div>
    
    </div>
   
     
    );
}