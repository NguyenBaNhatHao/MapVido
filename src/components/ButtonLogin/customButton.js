import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'

const customButton = ({onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default customButton

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },
    container_TERTIARY:{
        color: 'black',
        borderRadius: 8,
        padding: 6,
        width: '65%'
    },
    text_TERTIARY:{
        color: 'gray',
    },
    text:{
        fontWeight: 'bold',
        color: 'white'
    }
})