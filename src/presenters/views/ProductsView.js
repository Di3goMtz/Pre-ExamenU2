import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../componets/Header';
import ProductList from '../../componets/ProductList';
import { useNavigation } from '@react-navigation/native';

const ProductView = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState(['Televisor', 'Camisa', 'Manzanas', 'Croquetas', 'Sofá', 'Laptop', 'Pantalones', 'Leche', 'Peluche de Pokemon', 'Mesa de café']);

  return (
    <View>
      <Header />
      <ProductList products={products} />
    </View>
  );
};

export default ProductView;
