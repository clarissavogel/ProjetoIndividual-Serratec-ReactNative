import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    contentInput:{
        paddingVertical:15,
        marginTop: 15,
        borderWidth: 1,
        borderBottomColor: 'gray',
        flexDirection:"row",
        justifyContent:"space-between"

        
    },
    mail:{
        flexDirection:"row",

    },

    input: {
        backgroundColor:'black',
        color: '#fff',
        fontSize: 18,

    },

    iconmail:{
        marginRight: 15
    },
    
    buttonText: {
        color: 'black',
        fontSize: 17,
        fontWeight: "bold"
        
    },

})