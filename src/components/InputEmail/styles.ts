import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    contentInput:{
        padding: Platform.OS === 'ios' ? 15 : 10,
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
        fontSize: 20,

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