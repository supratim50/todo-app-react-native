import { View, StyleSheet, FlatList } from 'react-native'
import React, {useState, useContext} from 'react'
import CardList from '../components/lists/CardList';
import {TodoContext} from "../contextAPI/Context";


const Todo = ({navigation}) => {

    const todoCtx = useContext(TodoContext);

  return (
    <View style={styles.container}>
        <FlatList 
            data={todoCtx.todos}
            renderItem={({item}) => (
                <CardList text={item.text} status={item.status} id={item.id} />
            )}
            keyExtractor={(item) => item.id}
        />
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