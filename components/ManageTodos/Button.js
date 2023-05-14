import { View, Text, StyleSheet,Pressable } from 'react-native';
import React from 'react';

const Button = ({text, mode, onPress, onChange}) => {
  return (
      <Pressable style={({pressed}) => pressed && styles.pressed(mode)} onPress={onPress}>
          <View style={styles.button(mode)}>
            <Text style={styles.text(mode)}>{text}</Text>
          </View>
      </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({

    button:(mode) => ({
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: mode ? '' : "#5F9AEF",
        alignItems: 'center',
        minWidth: 120,
    }),
    text:(mode) => ({
      color: mode ? "#FF7C7C" : 'white',
      fontSize: 14,
      fontWeight: 'bold' 
    }), 
    pressed:(mode) => ({
      opacity: .5,
      backgroundColor: mode  ? "#AFAFAF" : '',
      borderRadius: 8
    })
})