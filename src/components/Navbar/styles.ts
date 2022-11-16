import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    navbar:{
        borderTopColor:"#EFF0EB",
        borderTopWidth:1,
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 25,
        flexDirection:"row",
        justifyContent:"space-between",

    },

    navbarIcons:{
        alignItems:"center",
    },

    navbarText:{
        marginTop: 5,
        fontSize: 12,
        color:"#A4A4A4"
    },

    
    navbarSelectedText:{
        marginTop: 5,
        fontSize: 12,
    },


})