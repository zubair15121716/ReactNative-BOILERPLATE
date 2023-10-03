import { StyleSheet } from "react-native";
import { width, height, totalSize } from 'react-native-dimension';

let styles = StyleSheet.create({
    container: {
        flex:1,
        zIndex:0,
        backgroundColor:'#000000',
    },
    bgimg: {
        width:null,
        height:null,
        flex:1,
        zIndex:0,
    },
    logo:{
        height: height(35),
        width: width(50),
        resizeMode:'contain',
        zIndex:20,
    },
    confirmationMsg:{
    color:'white',
    fontSize:22,
    marginTop:20,},
    appColor:{
        color:'#FFFFC8',
    },
    addedMsg:{
        color:'white',
        fontSize:24,
        marginTop:20,
        fontWeight:'bold',
    },
    textArea:{
        marginHorizontal:width(6),
        borderRadius:10,
        paddingHorizontal:width(2.5),
        paddingTop:height(1.2),
        backgroundColor:'#FFFFC8',
    },
    button:{
        width:width(60),
        height:height(7),
        backgroundColor:"#FFFFC8",
        borderRadius:25,
        alignItems:'center',
    },
    roundCheck:{
        width:width(9),
        height:height(1),
    },
    banner: {
    alignItems:'flex-end',
    marginRight:width(10),
    marginTop:width(3),
    },
    textInput:{
        color:'#000000',
        alignItems:'flex-start',
        fontSize:totalSize(1.3)},
    customButtonText:{
        color:'#000000',
        alignItems:'center',
        fontWeight:'bold',
        marginTop:15
    },
    payContainer:{backgroundColor: '#FFFFC8',
    width:width(80),
    height:height(40),
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',},
    header:{
        width:width(100),
        height:height(15),
        backgroundColor:'#000000',
    },
    headerTop:{
        width:width(100),
        height:height(20),
        backgroundColor:'#000000',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        alignItems:'center',
        justifyContent:'center',
        fontSize:21,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    headerBottom: {width:width(100),
        height:height(50),
        backgroundColor:'#000000',
        borderTopLeftRadius:33,
        borderTopRightRadius:33,
        alignItems:'center',
        justifyContent:'flex-start',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        color:"#000000",
    },
    heading1:{
        fontSize: 13,
        fontWeight: '500',
        color:"#444444",
        marginLeft:width(3.9),
    },
    card:{
        width:width(25),
        height:height(11.4),
        backgroundColor: '#fff',
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginLeft:width(1),
        marginRight:width(1),
    },
    optionsContainer: {width:width(100),height:height(47),borderTopRightRadius:40,borderTopLeftRadius:40, justifyContent: 'flex-end',marginTop:height(25),backgroundColor:"#fff"},
    optionsBorder :{borderWidth:2,borderColor:"#E9E9E9",borderRadius:10,margin:10 , justifyContent: 'flex-end',},
    optionsBar :{width:width(93),height:43,borderBottomWidth:2,borderBottomColor:"#E9E9E9",padding:5,flexDirection:'row'},
    optionsBarFinal :{width:width(93),height:43,padding:5,flexDirection:'row'},
})

export default styles;