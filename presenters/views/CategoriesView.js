import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../componets/Header';
import CategoryList from '../../componets/CategoryList';
import { useNavigation } from '@react-navigation/native';



const CategoryView = () => {
  const [categories, setCategories] = useState(['Electronica', 'Ropa', 'Juguetes', 'Mascotas', 'Muebles']);

  const navigation = useNavigation();

  return (
    <View>
      <Header />
      <CategoryList categories={categories} />
    </View>
  );
};

export default CategoryView;
