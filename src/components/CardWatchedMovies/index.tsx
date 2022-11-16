import React from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles";


export const CardWatchedMovies = () =>{

    return(
    <View style={styles.contentTimeWatching}>
        <View style={styles.contentTitleTime}>
            <Text style={styles.titleTime}>FILMES ASSISTIDOS</Text>
        </View>
        <View style={styles.contentCountEpisodes}>
            <Text style={styles.textNumberTime}>338</Text>
        </View>
    </View>
    )


}