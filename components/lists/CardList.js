import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React, { useState, useContext } from 'react';
import {TodoContext} from "../../contextAPI/Context";

const CardList = ({text, status, id}) => {

  const todoCTX = useContext(TodoContext);
  const navigation = useNavigation();

// UPDATE STATUS
const updateStatus = () => {
  const newStatus = {
    status: status === 'complete' ? 'incomplete' : 'complete'
  }
  todoCTX.updateTodo(id, newStatus);
}

// PRESS HANDLER
  const pressHandler = () => {
    navigation.navigate("ManageTodos", {
        todoId: id
    })
}
// LONG PRESS HANDLER
const longPresshandler = () => {
  if(status === 'incomplete') {
    Alert.alert(
      "Completed", 
      `Do you complete the task \'${text}\' ?`, 
      [{text:"Yes, Completed", onPress: updateStatus}],
      {cancelable: true}
    )
  } else {
    Alert.alert(
      "Incompleted", 
      `Oops, Marked \'${text}\' as completed by Mistake ?`, 
      [{text:"Incomplete", onPress: () => updateStatus()}],
      {cancelable: true}
    )
  }
}

  return (
    <TouchableOpacity style={styles.todoBox(status)} activeOpacity={0.7} onLongPress={longPresshandler} delayLongPress={300}  onPress={pressHandler}>
        <Text style={styles.todoText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CardList;

const styles = StyleSheet.create({
    todoBox: (status) => ({
        padding: 10,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .2,
        borderLeftColor: status === "complete" ? "#A1FF9E" : "#F48F8F",
        borderLeftWidth: 5,
        marginBottom: 20
    }),
    todoText: {
        fontSize: 15,
        color: "#404040"
    }
})