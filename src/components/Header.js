import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SearchImg from '../images/search-study.png';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {props.phrase} </Text>
      <Image source={props.img} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 170,
    backgroundColor: '#643df2',
    justifyContent: 'center',
    alignItems: "flex-start",
    paddingLeft: 20,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1
  },
  text: {
    width: 280,
    fontSize: 25,
    color: '#f5f5f5',
  },
  img: {
    width: 180,
    height: 140,
    position: 'absolute',
    top: 17,
    right: "2%",
    zIndex: -1 ,
  }
})

export default Header;