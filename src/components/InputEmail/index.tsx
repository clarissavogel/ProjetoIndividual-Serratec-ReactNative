import React from 'react';
import { TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./styles";


import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const InputEmail = () =>{

    return(
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
    )


}