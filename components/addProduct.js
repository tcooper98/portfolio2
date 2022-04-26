import React,{Component} from "react";
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { color } from "react-native-elements/dist/helpers";


function Add() {
    return (
      <View style={ styles.container}>
        <TextInput style={styles.input} placeholder="Name of Item"/>
        <TextInput style={styles.input} placeholder="Price"/>
        <TextInput style={styles.input} placeholder="Description"/>
        <TextInput style={styles.input} placeholder="Image URL"/>
        <Button
          title="Submit"
        />
    
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        padding: 20
        
      },
      input: {
        marginTop: 10,
        marginBottom: 10,
        
        
        
        },
    })

export default Add;

