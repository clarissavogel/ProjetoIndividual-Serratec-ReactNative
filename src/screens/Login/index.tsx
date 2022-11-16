import React, { useState, useEffect } from 'react';
import { Text , View,  StatusBar} from 'react-native';
import { styles } from './styles';

import { ButtonBack } from '../../components/ButtonBack';
import { InputEmail } from '../../components/InputEmail';
import { ButtonEnter } from '../../components/ButtonEnter';



export const Login = () =>{

  return(

    <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>

        <ButtonBack/>

        <Text style={styles.title}>Insira seu e-mail</Text>

        <InputEmail/>

        <ButtonEnter/>
        
    </View>
  )
}
