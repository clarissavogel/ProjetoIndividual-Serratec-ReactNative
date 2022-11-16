import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

import { Entypo } from '@expo/vector-icons';

export const ButtonNewList = () =>{

    return(
        <TouchableOpacity style={styles.buttonNewList}>
            <Entypo name="plus" size={50} color="#A9AAA8" />
            <Text style={{color:"#A9AAA8"}}>CRIAR UMA NOVA LISTA</Text>
        </TouchableOpacity>
    )


}