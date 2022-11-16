import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    contentTimeWatching:{
        backgroundColor: 'white',
        marginLeft: 10,
        marginTop:20,
        padding:10,
        marginBottom: 10,
        width: 220,
        height: 90,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2},
        shadowRadius:4,
        shadowOpacity:0.2
    },
    contentTitleTime:{
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
    },

    titleTime:{
        fontWeight:"500"
    },
    contentCountTime:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 2,
        marginHorizontal: 15

    },
    contentTextTime:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 2,
        marginHorizontal: 12
    },

    textNumberTime:{
        fontSize:27, 
        fontWeight:'bold'
    },

    textTime:{
        fontSize:12,
        fontWeight: "500"
    },

})