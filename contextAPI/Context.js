import React, {createContext, useReducer} from 'react';
import {Todos, todoReducer} from "./reducer";

export const TodoContext = createContext();

const Context = ({children}) => {

    const [todoList, dispatch] = useReducer(todoReducer, Todos);

    const addTodo = (todo) => {
        dispatch({type: 'ADD', payload: todo})
    }

    const deleteTodo = (id) => {
        dispatch({type: 'REMOVE', id: id})
    }

    const updateTodo = (id, data) => {
        dispatch({type: 'UPDATE', payload: {id: id, data: data}})
    }

    const value = {
        todos: todoList,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo
    }

  return (
    <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
  )
}

export default Context