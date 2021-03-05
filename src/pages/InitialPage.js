import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
let deviceHeight = Dimensions.get('window').height;

import Study from '../images/study.png';

const InitialPage = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent={false} backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.part1}>
        <Image source={Study} style={styles.image} />
        <Text style={styles.title} >DevClasses</Text>
        <Text style={styles.text}>STUDY EVERYWHERE</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Login')
        }}>
          <Text style={{ color: '#fff'}} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Register')
        } }>
          <Text style={{ color: '#fff'}} >Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff", //51f5ad
 
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
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
    width: '80%',
    padding: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "#643df2",
    width: '40%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  }

})

export default InitialPage;