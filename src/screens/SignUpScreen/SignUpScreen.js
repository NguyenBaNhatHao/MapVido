import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/image/LogoVD.png';
import CustomerInput from '../../components/CustomInput/customInput';
import ButtonLogin from '../../components/ButtonLogin/customButton';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onSignUp = () =>{
        console.warn("Sign up")
      }
    return (
    <View>
      <Image source={Logo} style={styles.logo}></Image>
      <CustomerInput placeholder="user name" Value={username} setValue={setUsername}/>
      <CustomerInput placeholder="Emai" Value={email} setValue={setEmail}/>
      <CustomerInput placeholder="password" Value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomerInput placeholder="ConfirmPassword" Value={ConfirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/>
      <ButtonLogin text="sign up" onPress={onSignUp}/>
    </View>
  )
}

export default SignUpScreen

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