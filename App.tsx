import React, {useState} from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Todo from './Screens/Todo';
import Complete from './Screens/Complete';
import InComplete from './Screens/InComplete';

import Ionicons from "react-native-vector-icons/Ionicons";
import ManageTodos from './Screens/ManageTodos';
import Context from './contextAPI/Context';


const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

const TodoOverview = () => {
  return (
    <Bottom.Navigator screenOptions={({navigation}) => ({
      headerStyle: {backgroundColor: "#5F9AEF"},
      headerTintColor: "white",
      tabBarActiveTintColor: "#5F9AEF",
      tabBarInactiveTintColor: "#BFD9FF",
      headerRight: ({tintColor}) => (
        <Ionicons 
          name="add-circle"
          color={tintColor}
          size={30}
          style={{marginRight: 20}}
          onPress={() => navigation.navigate("ManageTodos")}
        />
      )
    })}>
      <Bottom.Screen name='Todo' component={Todo} options={{
        title: "Todo List",
        tabBarIcon: ({color, size}) => <Ionicons name="list-circle" color={color} size={30} />
        }} />
      <Bottom.Screen name='Complete' component={Complete} options={{
        title: "Complete Todos",
        tabBarIcon: ({color, size}) => <Ionicons name="checkmark-circle" color={color} size={30} />
        }} />
      <Bottom.Screen name='InComplete' component={InComplete} options={{
        title: "Incomplete Todos",
        tabBarIcon: ({color, size}) => <Ionicons name="clipboard" color={color} size={30} />
        }} />
    </Bottom.Navigator>
  )
}

const App = () => {


  return (
    <NavigationContainer>
      <Context>
        <Stack.Navigator>
          <Stack.Screen 
            name='TodoOverview' 
            component={TodoOverview} 
            options={{
              headerShown: false
            }}
            />

            <Stack.Screen 
              name='ManageTodos'
              component={ManageTodos}
              options={{
                headerStyle: {backgroundColor: "#5F9AEF"},
                headerTintColor: "white"
              }}
            />
        </Stack.Navigator>
      </Context>
    </NavigationContainer>
  )};



export default App;
