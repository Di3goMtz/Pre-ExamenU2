import React from 'react';
import { FlatList, Text } from 'react-native';

const ProductList = ({ products }) => {
  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ProductList;