import React, {createContext, useReducer} from 'react';
import {Todos, todoReducer} from "./reducer";

export const TodoContext = createContext();

const Context = ({children}) => {

    const [todoList, dispatch] = useReducer(todoReducer, Todos);

    const addTodo = (id, todo) => {
        dispatch({type: 'ADD', payload: {todo: todo, id: id}})
    }

    const setTodo = (todoList) => {
        dispatch({type: 'SET', payload: todoList})
    }

    const removeTodo = (id) => {
        dispatch({type: 'REMOVE', id: id})
    }

    const updateTodo = (id, data) => {
        dispatch({type: 'UPDATE', payload: {id: id, data: data}})
    }

    const value = {
        todos: todoList,
        addTodo: addTodo,
        setTodo: setTodo,
        removeTodo: removeTodo,
        updateTodo: updateTodo
    }

  return (
    <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
  )
}

export default Context