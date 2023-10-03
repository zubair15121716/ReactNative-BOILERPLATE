import React from "react";
import {ScrollView, Text, View,ImageBackground, Image, TextInput,Modal, TouchableOpacity} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import {Wrapper} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import {useNavigation } from '@react-navigation/native';


function Testing(){
    const {navigate} = useNavigation();
    return (
      <>
       <Wrapper Bg={false}>
        <View style={{alignItems: 'center',justifyContent:'center',flex:1}}>
            <Text style={{fontSize:74,color:'#5352ed'}}>Hello World!</Text>
        </View>
        </Wrapper>
      </>
    );
};

export default Testing;

{/* <CustomButton press={()=>navigate('login')} title='CONTINUE' touchStyle={[styles.button,{marginTop:height(3)}]}></CustomButton> */}