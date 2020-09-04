import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import InitialPage from './src/pages/InitialPage';
import Register from './src/pages/RegisterPage';
import Login from './src/pages/LoginPage';

import Main from './src/pages/Main';
import Give from './src/pages/GiveClasses';
import Profile from './src/pages/Profile';

import Icon from 'react-native-vector-icons/AntDesign'

const textMain = "These are our avaliable classes";
const textProfile = "We're happy that you want to give classes";

import CauaS1 from './src/images/caua.png';
import Renan from './src/images/renan.jpg';
import Maggie from './src/images/maggie.jpg';

import SearchImg from './src/images/search-study.png';
import FormImg from './src/images/form-give.png';


const dados = [
  {
    photo: Renan,
    name: "Renan Palin",
    subject: "React Native",
    price: 20,
    country: "Canada",
    id: 1
  },
  {
    photo: CauaS1,
    name: "Cauã Souza",
    subject: "JavaScript",
    price: 25,
    country: "Brazil",
    id: 2
  },
  {
    photo: Maggie,
    name: "Maggie",
    subject: "CSS",
    price: 18,
    country: "United States",
    id: 3
  }
]


function MainScreen() {
  return <Main text={textMain} classes={dados} imgStudy={SearchImg} />
}

function ProfileScreen() {
  return <Profile />
}

function GiveClasses() {
  return <Give text={textProfile} imgGiveClasses={FormImg} />
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#643df2"
      inactiveColor="#a58dff"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Study"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="search1" size={25} color='#a58dff' />
          )
        }}
      />
      <Tab.Screen
        name="Give Classes"
        component={GiveClasses}
        options={{
          tabBarIcon: () => (
            <Icon name="plus" size={25} color='#a58dff' />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="user" size={25} color='#a58dff' />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Initial"
          component={InitialPage}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Main"
          component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
