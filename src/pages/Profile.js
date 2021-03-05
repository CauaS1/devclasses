import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import Header from '../components/Header'
import CauaS1 from '../images/profile-pic.jpg';


const Profile = props => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="#643df2" barStyle="light-content" />
      <Header />
      <View style={styles.imgAndName}>
        <Text style={styles.name}>CauaS1</Text>
        <Image source={CauaS1} style={styles.imgProfile} />
      </View>

      <View style={styles.mainInfo}>
        <View style={styles.about}>
        <Text style={styles.title}>About</Text>          
          <Text style={styles.texts}>Olá, eu sou o Cauã, eu programo em JavaScript e React JS/Native, eu tenho apenas 16 anos.</Text>
        </View>

        <View style={styles.country}>
          <Text style={styles.title}>Country</Text>
          <Text style={styles.texts}>From Brazil</Text>
        </View>

        <View style={styles.skills}>
          <Text style={styles.title}>Skills</Text>
          <Text style={styles.texts}>JavaScript</Text>
          <Text style={styles.texts}>React Native</Text>
          <Text style={styles.texts}>React.js</Text>
          <Text style={styles.texts}>Python</Text>
        </View>
      </View>

      <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <Text style={{ color: "#a58dff" }}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
  },
  imgAndName: {
    width: "100%",
    height: 250,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#a58dff',
  },
  name: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold"
  },

  mainInfo: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#a58dff",
    padding: 15
  },
  basicInfo: {
    width: "80%",
  },
  about: {
    borderRadius: 15,
    justifyContent: "center",
  },
  country: {
    marginBottom: 10,
    marginTop: 10
  },
  skills: {
    width: "100%",
  },
  texts: {
    color: "#333",
    fontSize: 15
  },
  title: {
    color: '#a58dff',
    fontSize: 16,
    paddingBottom: 3
  }
});

export default Profile;