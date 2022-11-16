import React from 'react';
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
export const ButtonShare = () =>{

    return(
        <TouchableOpacity>
            <SimpleLineIcons name="share-alt" size={20} color="gray" />
        </TouchableOpacity>
    )


}