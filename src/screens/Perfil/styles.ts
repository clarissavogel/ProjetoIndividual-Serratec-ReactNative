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
    },
    contentImagePerfil:{
        alignItems: "center"
    },
    imagePerfil:{
        marginTop: -30,
        width:100,
        height:100,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50
    },

    contentName:{
        marginTop:60,
        flexDirection:"row",
        justifyContent: "center"
    },

    name:{
        fontSize: 24,
        fontWeight:"bold",
        marginRight: 5
    },
    
    buttonEdit:{
        marginTop:20,
        padding:10,
        backgroundColor: '#EFF0EB',
        alignItems: "center",
        width:100,
    },



})