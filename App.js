import * as React from 'react';
import { Button, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/homescreen';
import Add from './components/addProduct';
import Viewp from './components/viewProducts';

function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal:'12', paddingVertical:'15' }}>
      <Button
        style={styles.button}
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Sell"
        onPress={() => navigation.navigate('Add')}
      />
    </View>
  );
}



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="View" component={Viewp} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});