import React from 'react';
import { TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./styles";

import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const InputSenha = () =>{

    return(
        <View style={styles.contentInput}>
            <View style={styles.password}>
                <EvilIcons name="lock" size={32} color="gray" style={styles.iconpassword} />
                <TextInput 
                    placeholder='Senha'
                    placeholderTextColor={'gray'}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
                <TouchableOpacity 
                activeOpacity={0.7}>
                    <Entypo style={{marginRight:10}} name="eye-with-line" size={20} color="#FDD400" />
                </TouchableOpacity>
        </View>
    )


}