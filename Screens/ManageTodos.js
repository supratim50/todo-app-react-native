import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import TodoForm from "../components/ManageTodos/TodoForm";
import {TodoContext} from "../contextAPI/Context";

const ManageTodos = ({route, navigation}) => {
//CONTEXT
const todoCTX = useContext(TodoContext);
// GET TODO ID
const todoId = route.params?.todoId;
const isTodoId = !!todoId;

// GET THE PERTICULAR TODO
const data = todoCTX.todos.filter((item) => item.id === todoId);


// SUBMIT DATA ==================================================
const confirmHandler = (data) => {
  if(isTodoId) {
    todoCTX.updateTodo(todoId, data);
  } else {
    todoCTX.addTodo(data);
  }
  navigation.goBack();
}
// REMOVE DATA ===================================================
const removeData = () => {
  todoCTX.removeTodo(todoId);
  navigation.goBack();
}
// CANCLE DATA ===================================================
const cancleHandler = () => {
  navigation.goBack();
}

useLayoutEffect(() => {
  navigation.setOptions({
    title: isTodoId ? "Edit Todo" : "Add Todo",
    headerRight: ({tintColor}) => isTodoId ? (
      <TouchableOpacity activeOpacity={0.5} onPress={removeData}>
        <Ionicons name="trash" size={24} color={tintColor} />
      </TouchableOpacity>
    ) : null
  })
}, [navigation, isTodoId])

const todoManage = {
  submitData : confirmHandler,
  removeTodo: todoCTX.deleteTodo,
  cancleHandler: cancleHandler,
  data: data,
  isTodoId: isTodoId
}

  return (
    <View style={styles.container}>
      <TodoForm {...todoManage} />
    </View>
  )
}

export default ManageTodos;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})