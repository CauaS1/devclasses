import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
let deviceHeight = Dimensions.get('window').height;

import Study from '../images/study.png';

const InitialPage = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.part1}>
        <Image source={Study} style={styles.image} />
        <Text style={styles.title} >DevClasses</Text>
        <Text style={styles.text}>Study Everywhere </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Login')
        }}>
          <Text style={{ color: '#fff'}} >Sing In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Register')
        } }>
          <Text style={{ color: '#fff'}} >Sing Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff", //51f5ad
    height: deviceHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  part1: {
    alignItems: "center"
  },
  image: {
    width: 220,
    height: 190,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#643df2",
    fontWeight: "bold"
  },
  text: {
    color: "#a58dff",
    fontSize: 17
  },
  btnContainer: {
    flexDirection: "row",
    width: 250,
    padding: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "#643df2",
    width: 110,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  }

})

export default InitialPage;