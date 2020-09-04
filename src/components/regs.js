/*

  import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native';
let deviceHeight = Dimensions.get('window').height;

import firebase from 'firebase'
import 'firebase/auth';

import FormRow from '../components/FormRow';
import Account from '../images/account.png';

export default class Register extends Component {
  state = {
    mail: '',
    password: '',
    message: ''
  }


  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDcYVsKZh1EHx5-HnkmeXkXJc_J_92tDqI",
      authDomain: "proclasses-10f59.firebaseapp.com",
      databaseURL: "https://proclasses-10f59.firebaseio.com",
      projectId: "proclasses-10f59",
      storageBucket: "proclasses-10f59.appspot.com",
      messagingSenderId: "898775503879",
      appId: "1:898775503879:web:e81533db975feab9b946a2",
      measurementId: "G-NFBJC9P6S0"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    };
  }

  onChangeHandler(field, value) { //fild referese ao email, e value a password
    this.setState({
      [field]: value
    })
  }

  message() {
    if (!this.state.message) { //se o message estiver vazio nao aparece nada
      return null
    }

    return (
      <View style={styles.messageBox}>
        <Text> {this.state.message} </Text>
      </View>
    )
  }

  createAccount() {
    this.setState({ message: "" })
    const { mail, password } = this.state;
    const loginUserSuccess = user => {
      this.setState({ message: "Success!" })
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(loginUserSuccess)
      .catch(function () {
        this.setState({ message: "Account not created" })
      })
  }

  renderButton() {
    return (
      <TouchableOpacity style={styles.btn} onPress={() => {
        this.createAccount()
      }} >
        <Text style={{ color: "#fff" }}>Sing Up</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Create Your Account</Text>

          <FormRow>
            <TextInput style={styles.input}
              placeholder="Email"
              value={this.state.mail}
              onChangeText={value => this.onChangeHandler('mail', value)}
            />
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={value => this.onChangeHandler('password', value)}
            />
          </FormRow>

          {this.renderButton()}
          {this.message()}

        </View>

        <View style={styles.footer}>
          <Image source={Account} style={styles.image} />

          <TouchableOpacity style={styles.footer} onPress={() => { this.props.navigation.navigate('Login') }} >
            <Text>Have an account? Sing In </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#643df2",
    height: deviceHeight,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "space-around",
  },
  form: {
    backgroundColor: "#fff",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginTop: 20
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#643df2",
    width: 320,
    height: 45,
    marginTop: 8,
    borderRadius: 20,
    paddingLeft: 15,
    paddingBottom: 0,
    fontSize: 18
  },
  title: {
    fontSize: 20,
  },
  btn: {
    width: 150,
    height: 50,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#643df2',
    borderRadius: 8
  },
  messageBox: {
    width: 190,
    height: 35,
    backgroundColor: "#a58dff",
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },

  footer: {
    alignItems: "center",
    padding: 5,
    flexDirection: "column",
    justifyContent: "center"
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 20
  },
})


*/