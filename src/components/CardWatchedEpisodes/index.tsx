import React from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles";


export const CardWatchedEpisodes = () =>{

    return(

        <View style={styles.contentTimeWatching}>
            <View style={styles.contentTitleTime}>
                <Text style={styles.titleTime}>EPISÓDIOS ASSISTIDOS</Text>
            </View>
            <View style={styles.contentCountEpisodes}>
                <Text style={styles.textNumberTime}>3.7K</Text>
            </View>
        </View>
    )


}