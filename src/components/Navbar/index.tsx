import React from 'react';
import { TouchableOpacity, Text , View} from "react-native";
import { styles } from "./styles";

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Navbar = () =>{

    return(
        <View style={styles.navbar}>
            <TouchableOpacity activeOpacity={0.7} style={styles.navbarIcons}>
                <Feather name="tv" size={36} color="#A4A4A4" />
                <Text style={styles.navbarText}>Séries</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.navbarIcons}>
                <MaterialCommunityIcons name="movie-open-outline" size={36} color="#A4A4A4" />
                <Text style={styles.navbarText}>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.navbarIcons}>
                <Entypo name="magnifying-glass" size={36} color="#A4A4A4" />
                <Text style={styles.navbarText}>Descobrir</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.navbarIcons}>
                <FontAwesome5 name="user" size={36} color="black" />
                <Text style={styles.navbarSelectedText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )


}