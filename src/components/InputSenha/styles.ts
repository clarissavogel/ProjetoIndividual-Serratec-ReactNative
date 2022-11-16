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
    password:{
        flexDirection:"row",

    },

    input: {
        backgroundColor:'black',
        color: '#fff',
        fontSize: 18,

    },

    iconpassword:{
        marginRight: 15
    },

})