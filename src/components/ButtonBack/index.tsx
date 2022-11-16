import React from 'react';
import { TouchableOpacity } from "react-native";


import { AntDesign } from '@expo/vector-icons';

export const ButtonBack = () =>{

    return(
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={{marginTop:10}}>
             <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
    )


}