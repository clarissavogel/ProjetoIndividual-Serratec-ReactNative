import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 64,
        paddingHorizontal: 30
    },

    title: {
        color: '#fff',
        fontSize: 24,
        marginTop: 30,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    buttonBack: {
        marginTop: 10
    },


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

    buttonEnter:{
        backgroundColor: "#FDD400",
        marginTop: 40,
        alignItems: 'center',
        padding: 15,
        borderRadius: 50

    },

    buttonText: {
        color: 'black',
        fontSize: 17,
        fontWeight: "bold"
        
    },

})