import { View, StyleSheet, FlatList, Text, ActivityIndicator, RefreshControl } from 'react-native'
import React, {useState, useContext, useLayoutEffect} from 'react'
import CardList from '../components/lists/CardList';
import {TodoContext} from "../contextAPI/Context";

//DATABASE
import {getTodo} from "../utils/http";


const Todo = () => {

    // CALLING CONTEXT
    const todoCtx = useContext(TodoContext);

    const [loading, setLoading] = useState(false);

    // GET TODOS FROM DATABASE
    const getTodos = async () => {
        setLoading(true);
        const todoList = await getTodo();
        todoCtx.setTodo(todoList);
        setLoading(false);
    }

    useLayoutEffect(() => {
        getTodos();

    }, [])

  return (
    <View style={styles.container}>
        {
            loading ? (
                <ActivityIndicator size='large' color="#5F9AEF"/>
            ) :
            todoCtx.todos.length ? (
                <FlatList 
                    data={todoCtx.todos}
                    renderItem={({item}) => (
                        <CardList text={item.text} status={item.status} id={item.id} />
                    )}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <RefreshControl refreshing={loading} onRefresh={getTodos} colors={["#5F9AEF"]} />
                    }
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