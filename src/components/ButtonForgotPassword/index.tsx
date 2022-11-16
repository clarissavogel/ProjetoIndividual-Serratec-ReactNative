import React from 'react';
import { TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";


export const ButtonForgotPassword = () =>{

    return(

        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonForgotPassword}>
            <Text style={styles.buttonText}>ESQUECI A SENHA</Text>
        </TouchableOpacity>
    )


}