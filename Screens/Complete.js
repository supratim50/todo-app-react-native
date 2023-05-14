import { View, StyleSheet, FlatList } from 'react-native'
import React, {useContext} from 'react';
import {TodoContext} from "../contextAPI/Context";
import CardList from '../components/lists/CardList';

const Complete = () => {

    const todoCtx = useContext(TodoContext);
    console.log("complete",todoCtx);

    const completeTodos = todoCtx.todos.filter((todo) => todo.status === "complete");

  return (
    <View style={styles.container}>
        <FlatList 
            data={completeTodos}
            renderItem={({item}) => (
                <CardList text={item.text} status={item.status} id={item.id}/>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default Complete;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#E1E1E1"
    },
})