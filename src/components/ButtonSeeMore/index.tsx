import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";


export const ButtonSeeMore = () =>{

    return(
        <TouchableOpacity
        activeOpacity={0.7}>
            <Text style={styles.textSeeMore}>VER MAIS</Text>
        </TouchableOpacity>
    )


}