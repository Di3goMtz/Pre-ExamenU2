import React from 'react';
import { View } from 'react-native';
import Header from '../../componets/Header';
import CustomButton from '../../componets/Button';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  
  return (
    <View>
      <Header />
      <CustomButton title="Categorias" color="blue" onPress={() => navigation.navigate('Categories')} />
      <CustomButton title="Productos" color="red" onPress={() => navigation.navigate('Products')} />
    </View>
  );
};

export default Home;
