import React from 'react';
import { FlatList, Text } from 'react-native';

const CategoryList = ({ categories }) => {
  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default CategoryList;