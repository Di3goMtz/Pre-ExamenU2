import React from 'react';
import { Button } from 'react-native';

const CustomButton = ({ title, color, onPress }) => {
  return (
    <Button
      title={title}
      color={color}
      onPress={onPress}
    />
  );
};

export default CustomButton;
