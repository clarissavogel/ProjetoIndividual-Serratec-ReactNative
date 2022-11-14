import { StyleSheet, Platform } from "react-native";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',

    },
    
    imagem:{
        width: 420,
        height: 250
    },

    contentInfo:{
        marginTop: 50,
        flexDirection:"row",
        justifyContent:"space-between"
    },

    buttonQuestion:{
        marginLeft:20
    },
    buttonBell:{
        marginRight:20, 
        padding: 3,
        backgroundColor: '#FDD400',
        borderRadius: 80
    },

    contentCarousel:{
        marginLeft: 30,
        marginTop: 120,
        flexDirection:"row",
    },
    dot:{
        padding: 0, 
        marginRight: -10
    }



})