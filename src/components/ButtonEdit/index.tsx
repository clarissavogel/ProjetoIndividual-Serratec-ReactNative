import React from 'react';
import { TouchableOpacity,Text } from "react-native";
import { styles } from "./styles";


export const ButtonEdit = () =>{

    return(
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonEdit}>
            <Text style={{fontSize: 14}}>EDITAR</Text>
        </TouchableOpacity>
    )


}