import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, Component } from 'react'
import Logo from '../../../assets/image/LogoVD.png';
import CustomerInput from '../../components/CustomInput/customInput';
import ButtonLogin from '../../components/ButtonLogin/customButton';
import {useNavigation} from '@react-navigation/native'
const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigation = useNavigation();
  const onPress = () =>{
    console.warn("Sign in")
  }
  const onPressForgotPassword = () =>{
    console.warn("forgot password!")
  }
  const onSignUp = () =>{
    Navigation.navigate('Sign Up');
  }
  
  return (
    <View style={styles.conteiner}>
      <Image source={Logo} style={styles.logo}></Image>
      <CustomerInput placeholder="user name" Value={username} setValue={setUsername}/>
      <CustomerInput placeholder="password" Value={password} setValue={setPassword} secureTextEntry={true}/>
      <ButtonLogin text="forgot password!" onPress={onPressForgotPassword} type="TERTIARY"/>
      <ButtonLogin text="sign in" onPress={onPress}/>
      <ButtonLogin text="Don't have account? create one" onPress={onSignUp} type="TERTIARY" />
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  conteiner:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    margin: 10,
    width: 150,
    height: 150
  }
})