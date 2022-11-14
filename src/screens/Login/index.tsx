import React, { useState, useEffect } from 'react';
import { Text , TouchableOpacity, View, Image, TextInput } from 'react-native';
import { styles } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export const Login = () =>{

  return(
    <View style={styles.container}>
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={styles.buttonBack}>
             <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Insira seu e-mail</Text>

        <View style={styles.contentInput}>
            <View style={styles.mail}>
                <Feather name="mail" size={24} color="gray" style={styles.iconmail} />
                <TextInput 
                    placeholder='E-mail'
                    placeholderTextColor={'gray'}
                    style={styles.input}
                />

            </View>
                <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.buttonText}>
                    <AntDesign name="closecircle" size={24} color="#FDD400" />
                </TouchableOpacity>
        </View>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonEnter}
        >
            <Text style={styles.buttonText}>AVANÇAR</Text>
        </TouchableOpacity>
        
    </View>
  )
}
