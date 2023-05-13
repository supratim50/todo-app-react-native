import { View, StyleSheet, FlatList } from 'react-native'
import React, {useState, useContext} from 'react'
import CardList from '../components/lists/CardList';
import {TodoContext} from "../contextAPI/Context";


const Todo = () => {

    const todoCtx = useContext(TodoContext);

    // const [DUMMY_DATA, setDUMMY_DATA] = useState([
    //     {
    //         id: "e1",
    //         text: "Doing execise",
    //         status: 'complete'
    //     },
    //     {
    //         id: "e2",
    //         text: "Make breakfast",
    //         status: 'Incomplete'
    //     },
    //     {
    //         id: "e3",
    //         text: "Wash Cloths",
    //         status: 'complete'
    //     },
    //     {
    //         id: "e4",
    //         text: "Make Lunch",
    //         status: 'incomplete'
    //     },
    //     {
    //         id: "e5",
    //         text: "Wash Dishes",
    //         status: 'complete'
    //     },
    //     {
    //         id: "e6",
    //         text: "Make Dinner",
    //         status: 'incomplete'
    //     },
    // ]);

  return (
    <View style={styles.container}>
        <FlatList 
            data={todoCtx.todos}
            renderItem={({item}) => (
                <CardList text={item.text} status={item.status}/>
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