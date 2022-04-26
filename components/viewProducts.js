import React,{Component} from "react";
import { View } from "react-native";
import { Page } from "./productPage";


function Viewp({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       {Items.map(({id, image, name, price, description }) =>(
        <Page
        key={id} 
        image={image} 
        name={name} 
        price={price}
        description={description}
        />
       ))}
      </View>
    );
  }
export default Viewp;
