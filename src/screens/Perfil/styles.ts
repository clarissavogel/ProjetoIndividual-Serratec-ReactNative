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
    
    contentEditProfile:{
        flexDirection:"row",
        justifyContent: "center",
    },

    contentNewList:{
        marginTop: 20,
        marginHorizontal: 10,
        paddingBottom: 20,
        borderBottomColor: "#EFF0EB",
        borderBottomWidth: 1
    },
    textTitle:{
        fontSize: 24,
        fontWeight:"bold",
    },


    contentSeriesMovies:{
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },

    imageFolder:{
        marginLeft: 10,
        marginTop:20,
        marginBottom: 30,
        width: 145,
        height: 210,
        borderRadius: 10,
    },



    divisao:{
        borderBottomWidth: 1,
        borderBottomColor:"#EFF0EB",

    },

})