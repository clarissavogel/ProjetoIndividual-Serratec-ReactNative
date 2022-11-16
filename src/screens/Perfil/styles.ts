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
    
    contentEditProfile:{
        flexDirection:"row",
        justifyContent: "center",
    },
    buttonEdit:{
        marginTop:20,
        padding:10,
        width:100,
        height:35,
        backgroundColor: '#EFF0EB',
        alignItems: "center",
        borderRadius:50,
    },

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

    contentCountEpisodes:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop: 2
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

    buttonNewList:{
        marginTop: 20,
        backgroundColor:"#EFF0EB",
        height: 170,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"

    },

    contentSeriesMovies:{
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },

    textSeeMore:{
        color: "#2575CA",
        fontWeight: "bold"
    },

    imageFolder:{
        marginLeft: 10,
        marginTop:20,
        marginBottom: 30,
        width: 145,
        height: 210,
        borderRadius: 10,
    },

    folder:{
        backgroundColor:"#EFF0EB",
        marginLeft: 10,
        marginTop:20,
        marginBottom: 30,
        width: 145,
        height: 210,
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center"
    },

    divisao:{
        borderBottomWidth: 1,
        borderBottomColor:"#EFF0EB",

    },

    buttonFollowers:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor:"#EFF0EB",
        
    },

    contentNumber:{
        flexDirection:"row", 
    },

    textInfo:{
        fontSize: 18,
        marginRight: 2
    },

    buttonConfig:{
        marginTop:20,
        marginBottom:20,
        padding:10,
        width:200,
        height:45,
        backgroundColor: '#EFF0EB',
        flexDirection:"row",
        justifyContent:"center",
        alignSelf: "center",
        borderRadius:50,
    },


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