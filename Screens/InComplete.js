import { View, StyleSheet, FlatList } from 'react-native'
import React, {useContext} from 'react';
import {TodoContext} from "../contextAPI/Context";
import CardList from '../components/lists/CardList';

const InComplete = () => {

    const todoCtx = useContext(TodoContext);

    const completeTodos = todoCtx.todos.filter((todo) => todo.status === "incomplete");

  return (
    <View style={styles.container}>
        <FlatList 
            data={completeTodos}
            renderItem={({item}) => (
                <CardList text={item.text} status={item.status}/>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default InComplete;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#E1E1E1"
    },
})