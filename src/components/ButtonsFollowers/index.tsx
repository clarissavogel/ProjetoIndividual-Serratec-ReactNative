import React from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

import { AntDesign } from '@expo/vector-icons';

export const ButtonsFollowers = () =>{

    return(
        <View>
            <TouchableOpacity
            style={styles.buttonFollowers}
            activeOpacity={0.7}>
                <Text style={styles.textInfo}>Seguidores</Text>
                <View style={styles.contentNumber}>
                    <Text style={styles.textInfo}>42</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.buttonFollowers}
                    activeOpacity={0.7}>
                        <Text style={styles.textInfo}>Seguindo</Text>
                    <View style={styles.contentNumber}>
                         <Text style={styles.textInfo}>41</Text>
                        <AntDesign name="right" size={20} color="black" />
                    </View>
             </TouchableOpacity>
             <TouchableOpacity
                    style={styles.buttonFollowers}
                    activeOpacity={0.7}>
                        <Text style={styles.textInfo}>Comentários</Text>
                    <View style={styles.contentNumber}>
                        <Text style={styles.textInfo}>17</Text>
                        <AntDesign name="right" size={20} color="black" />
                    </View>
            </TouchableOpacity>
            
            <TouchableOpacity
                    style={styles.buttonFollowers}
                    activeOpacity={0.7}>
                        <Text style={styles.textInfo}>Estatísticas</Text>
                        <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>

        </View>

    )


}