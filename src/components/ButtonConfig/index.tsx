import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";


import { MaterialIcons } from '@expo/vector-icons';
export const ButtonConfig = () =>{

    return(
        <TouchableOpacity style={styles.buttonConfig}>
            <MaterialIcons name="settings" size={20} color="black" />
            <Text style={{marginTop:2, marginLeft:5}}>CONFIGURAÇÕES</Text>
        </TouchableOpacity>
    )


}