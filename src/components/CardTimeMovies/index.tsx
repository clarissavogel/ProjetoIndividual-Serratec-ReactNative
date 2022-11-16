import React from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles";


export const CardTimeMovies = () =>{

    return(
        <View style={styles.contentTimeWatching}>
            <View style={styles.contentTitleTime}>
                <Text style={styles.titleTime}>TEMPO VENDO FILMES</Text>
            </View>
            <View style={styles.contentCountTime}>
                <Text style={styles.textNumberTime}>00</Text>
                <Text style={styles.textNumberTime}>28</Text>
                <Text style={styles.textNumberTime}>00</Text>
            </View>
            <View style={styles.contentTextTime}>
                <Text style={styles.textTime}>Meses</Text>
                <Text style={styles.textTime}>Dias</Text>
                <Text style={styles.textTime}>Horas</Text>
            </View>
        </View>
    )


}