import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../presenters/views/Home';
import CategoryView from '../presenters/views/CategoriesView';
import ProductView from '../presenters/views/ProductsView';



const Navegation = () => {
  const Stack = createStackNavigator();

  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={CategoryView} />
        <Stack.Screen name="Products" component={ProductView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegation;
