import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
const customInput = ({Value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
                 onChangeText={setValue}
                 placeholder={placeholder}
                 value={Value}
                 secureTextEntry={secureTextEntry}/>
    </View>
  )
}

export default customInput

const styles = StyleSheet.create({
  container:{
    width:'100%'
  },
  input:{
    margin: 10,
    height: 40,
    width: '100%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 3
  }
})
