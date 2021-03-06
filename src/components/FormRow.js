import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const FormRow = props => {
  const { children } = props
  return (
    <View style={{ width: '100%' }}>
      { children }
    </View>
  );
}

export default FormRow;