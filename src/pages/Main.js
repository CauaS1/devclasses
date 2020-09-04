import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
let ScreenHeight = Dimensions.get("window").height;
import Header from '../components/Header';

export default class Main extends Component {
  render() {
    const classData = this.props.classes;

    return (
      <View style={styles.container}>
        <Header phrase={this.props.text} img={this.props.imgStudy} />
        <View style={styles.searchsComponents}>
          <View style={styles.form} >
            <TextInput placeholder="Search subjects" style={styles.input} />
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "#fff" }} >Search</Text>
            </TouchableOpacity>
          </View>
        </View>



          <FlatList
            data={classData}
            keyExtractor={item => item.id.toString()}
            style={{ height: ScreenHeight - 240 }}
            renderItem={({ item }) => (
              <View style={classes.boxClass}>
                <View style={classes.header}>

                  <View style={classes.topContent}>
                    <Image source={item.photo} style={{ width: 50, height: 50, borderRadius: 25 }} />
                    <View style={classes.nameAndSubjectContainer}>
                      <Text style={classes.name}> {item.name} </Text>
                      <Text style={classes.subject}> {item.subject} </Text>
                    </View>
                  </View>

                </View>

                <View style={classes.mainContainer}>
                  <Text style={{ color: "#333" }}>Olá, nessa aula você apredera sobre props e state, esses dois são muitos poderosos e vão facilitar sua vida</Text>
                </View>

                <View style={classes.footerContainer}>
                  <Text style={{ color: "#a58dff" }}> Price/hour $ {item.price} </Text>
                </View>
              </View>
            )}
          />

      </View>
    );
  }
}

const classes = StyleSheet.create({
  boxClass: {
    width: "95%",
    borderWidth: 1,
    borderColor: "#a58dff",
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    },

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  nameAndSubjectContainer: {
    justifyContent: "center",
    marginLeft: 10,
    height: 50,
  },
  topContent: {
    flexDirection: "row"
  },
  name: {
    fontSize: 17,
    color: "#643df2"
  },
  subject: {
    fontSize: 15,
    color: "#a58dff"
  },

  mainContainer: {
    width: "95%",
    padding: 5
  },

  footerContainer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }

})


const styles = StyleSheet.create({
  searchsComponents: {
    width: "100%",
    alignItems: "center",
    marginTop: 140,
  },
  form: {
    width: "88%",
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  input: {
    width: 200,
    fontSize: 16,
    borderRadius: 8,
    height: 45,
    backgroundColor: "#f5f5f5",
    borderColor: '#a58dff',
    borderWidth: 1,
    paddingLeft: 10
  },
  button: {
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#a58dff",
    borderRadius: 8
  }
})



