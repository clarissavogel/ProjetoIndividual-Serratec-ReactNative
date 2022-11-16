import React from 'react';
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { FontAwesome } from '@expo/vector-icons';

export const ButtonBell = () =>{

    return(
        <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.buttonBell}>
            <FontAwesome name="bell-o" size={20} color="black" />
        </TouchableOpacity>
    )


}