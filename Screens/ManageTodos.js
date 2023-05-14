import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import TodoForm from "../components/ManageTodos/TodoForm";
import {TodoContext} from "../contextAPI/Context";

//DATABASE
import {postTodo, updateTodo, deleteTodo} from "../utils/http";

const ManageTodos = ({route, navigation}) => {
//CONTEXT
const todoCTX = useContext(TodoContext);
// GET TODO ID
const todoId = route.params?.todoId;
const isTodoId = !!todoId;

// GET THE PERTICULAR TODO
const data = todoCTX.todos.filter((item) => item.id === todoId);


// SUBMIT DATA ==================================================
const confirmHandler = async (data) => {
  if(isTodoId) {
    updateTodo(todoId, data);
    todoCTX.updateTodo(todoId, data);
  } else {
    const id = await postTodo(data);
    todoCTX.addTodo(id, data);
  }
  navigation.goBack();
}
// REMOVE DATA ===================================================
const removeData = () => {
  deleteTodo(todoId);
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