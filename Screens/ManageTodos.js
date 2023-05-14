import { View, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react';
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

useLayoutEffect(() => {
  navigation.setOptions({
    title: isTodoId ? "Edit Todo" : "Add Todo"
  })
}, [navigation, isTodoId])

// submit data
const confirmHandler = (data) => {
  console.log("Submit Handler ",data);
  if(isTodoId) {
    todoCTX.updateTodo(todoId, data);
  } else {
    todoCTX.addTodo(data);
  }
  navigation.goBack();
}

const cancleHandler = () => {
  navigation.goBack();
}

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