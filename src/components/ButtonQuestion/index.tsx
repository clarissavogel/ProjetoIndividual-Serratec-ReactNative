import React from 'react';
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { AntDesign } from '@expo/vector-icons';

export const ButtonQuestion = () =>{

    return(
        <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.buttonQuestion}>
            <AntDesign name="questioncircle" size={24} color="black" />
        </TouchableOpacity>
    )


}