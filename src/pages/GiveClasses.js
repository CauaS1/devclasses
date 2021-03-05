import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Header from '../components/Header';

export default class GiveClasses extends Component {
  render() {
    return (
      <View>
        <Header phrase={this.props.text} img={this.props.imgGiveClasses} />
        <View style={styles.searchsComponents}>
          <View style={styles.form} >
            <TextInput placeholder="Title" style={styles.input} />
            <TextInput placeholder="Subject" style={styles.input} />
            <TextInput placeholder="About your class"
              multiline={true}
              numberOfLines={6}
              style={styles.textarea}
            />
            <TextInput placeholder="Price" style={styles.input} />

            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "#fff", fontWeight: 'bold' }} >Create Class</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchsComponents: {
    width: "100%",
    alignItems: "center",
    marginTop: 140,
  },
  form: {
    width: "100%", //88
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
  },
  input: {
    width: "90%",
    fontSize: 16,
    borderRadius: 8,
    height: 45,
    backgroundColor: "#f5f5f5",
    borderColor: '#a58dff',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 15
  },
  button: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#a58dff",
    borderRadius: 8
  },
  textarea: {
    width: '90%',
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    borderColor: '#a58dff',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 15
  }
})