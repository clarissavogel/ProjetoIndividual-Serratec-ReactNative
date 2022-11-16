import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

import { Entypo } from '@expo/vector-icons';

export const ButtonFolder = () =>{

    return(
        <TouchableOpacity style={styles.folder}>
            <Entypo name="plus" size={50} color="#A9AAA8" />
            <Text style={{color:"#A9AAA8", fontSize:10}}>ADICIONAR A UMA LISTA</Text>
        </TouchableOpacity>
    )


}