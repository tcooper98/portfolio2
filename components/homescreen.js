import React,{Component, useState} from "react";
import { View } from "react-native";
import { Format } from "./productFormat";
import { Page } from "./productPage";
import Items from "./products";

function Home() {
  const[isViewing, pageView] = useState(false);
  const [product, setProduct] = useState({});
  function event(){
    console.log("eventfromhome");
}
console.log(product);
   if(isViewing){
     return (
       <Page  
       image={product.image} 
       name={product.name} 
       price={product.price}
       description={product.description}>
       </Page>
     );
   }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <h1>Items for Sale</h1>
        {Items.map(({id, image, name, price, description}) =>(
        <Format
        eventHandler={event}
        setProduct={setProduct}
        key={id} 
        image={image} 
        name={name} 
        price={price}
        description={description}
        pageView={pageView}
        />
       ))}
   
        
      </View>
    );
  }

export default Home;


