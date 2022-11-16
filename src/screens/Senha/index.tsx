import React, { useState, useEffect } from 'react';
import { Text , View,  StatusBar} from 'react-native';
import { styles } from './styles';

import { ButtonBack } from '../../components/ButtonBack';
import { InputSenha } from '../../components/InputSenha';
import { ButtonEnter } from '../../components/ButtonEnter';
import { ButtonForgotPassword } from '../../components/ButtonForgotPassword';



export const Senha = () =>{

  return(

    <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>

        <ButtonBack/>

        <Text style={styles.title}>Insira sua senha</Text>
        <Text style={{color: 'white'}}>clarissa.vogel@gmail.com</Text>

        <InputSenha/>

        <ButtonEnter/>

        <ButtonForgotPassword/>
        
    </View>
  )
}
