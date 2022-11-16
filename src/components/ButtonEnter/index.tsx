import React from 'react';
import { TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";



export const ButtonEnter = () =>{

    return(

        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonEnter}
        >
            <Text style={styles.buttonText}>AVANÇAR</Text>
        </TouchableOpacity>
    )


}