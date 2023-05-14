import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react';
import Button from './Button';

const TodoForm = ({submitData, removeTodo, cancleHandler, isTodoId, data}) => {

  const [todo, setTodo] = useState();
  const [status, setStatus] = useState('incomplete');

  const submitHandler = () => {
    const data = {
      text: todo,
      status: status
    }

    submitData(data);
  }
// ADD DATA TO THE TODO STATE, IF USERS WANT TO EDIT
  useEffect(() => {
    if(data.length) {
      const {text, status} = data[0];
      setTodo(text);
      setStatus(status);
    }
  }, [data])

  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <Text style={styles.label}>Enter your Todo</Text>
        <TextInput style={styles.input} placeholder='Enter your Todo' placeholderTextColor="#8A8A8A" onChangeText={setTodo} value={todo} />
      </View>
      <View style={styles.buttonBox}>
        <Button text="Cancle" mode onPress={cancleHandler} />
        {
          isTodoId ? (
            <Button text="Update" onPress={submitHandler} />
          ) : (
            <Button text="Add" onPress={submitHandler} />
          )
        }        
      </View>
    </View>
  )
}

export default TodoForm;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '10%'
    },
    inputbox:{
        marginVertical: 24,
        alignItems: 'center'
    },
    label: {
        color: "#454545",
        fontSize: 16,
        paddingHorizontal: 8,
        fontWeight: 'bold',
    },
    input: {
        padding: 8,
        color: "#454545",
        fontSize: 14,
        marginTop: 24,
        borderRadius: 8,
        backgroundColor: 'white',
        minWidth: '100%',
        elevation: 2,
        shadowOffset: {width: 0, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    buttonBox: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
})