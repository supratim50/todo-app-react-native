import { View, StyleSheet, FlatList, Text } from 'react-native'
import React, {useState, useContext} from 'react'
import CardList from '../components/lists/CardList';
import {TodoContext} from "../contextAPI/Context";


const Todo = () => {

    // CALLING CONTEXT
    const todoCtx = useContext(TodoContext);

  return (
    <View style={styles.container}>
        {
            todoCtx.todos.length ? (
                <FlatList 
                    data={todoCtx.todos}
                    renderItem={({item}) => (
                        <CardList text={item.text} status={item.status} id={item.id} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: "#575757"}}>Hmm.. It seems like you don't have any plan for today</Text>
                </View>
            )
        }
    </View>
  )
}

export default Todo;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#E1E1E1"
    },
})