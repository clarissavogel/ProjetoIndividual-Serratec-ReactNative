import React, {useState} from 'react';
import { TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./styles";


import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export const InputEmail = () =>{

    const [email,setEmail] = useState("");

    function apagarEmail(){
        setEmail("")
    }
    return(
        <View style={styles.contentInput}>
            <View style={styles.mail}>
                <Feather name="mail" size={24} color="gray" style={styles.iconmail} />
                <TextInput 
                    placeholder='E-mail'
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor={'gray'}
                    keyboardType={'email-address'}
                    style={styles.input}
                />
            </View>
                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={apagarEmail}>
                    <AntDesign name="closecircle" size={20} color="#FDD400" />
                </TouchableOpacity>
        </View>
    )


}