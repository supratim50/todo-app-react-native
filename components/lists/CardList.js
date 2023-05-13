import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CardList = ({text, status}) => {
  return (
    <TouchableOpacity style={styles.todoBox(status)} activeOpacity={0.7} onLongPress={() => {}}>
        <Text style={styles.todoText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CardList;

const styles = StyleSheet.create({
    todoBox: (status) => ({
        padding: 10,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .2,
        borderLeftColor: status === "complete" ? "#A1FF9E" : "#F48F8F",
        borderLeftWidth: 5,
        marginBottom: 20
    }),
    todoText: {
        fontSize: 15,
        color: "#404040"
    }
})