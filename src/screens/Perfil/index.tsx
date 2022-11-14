import React, { useState, useEffect } from 'react';
import { Text , TouchableOpacity, View, Image, TextInput, ImageBackground } from 'react-native';
import { styles } from './styles';
import Outlander from '../../assets/outlander.jpg';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const Perfil = () =>{

    return(
      <View style={styles.container}>
            <ImageBackground source={Outlander} style={styles.imagem}>
                <View style={styles.contentInfo}>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.buttonQuestion}>
                        <AntDesign name="questioncircle" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.buttonBell}>
                        <FontAwesome name="bell-o" size={20} color="black" />
                    </TouchableOpacity>

                </View>
                <View style={styles.contentCarousel}>
                     <Entypo name="dot-single" size={34} color="white" style={styles.dot}/>
                     <Entypo name="dot-single" size={34} color="white" style={styles.dot}/>
                     <Entypo name="dot-single" size={34} color="white" style={styles.dot}/>
                </View>

                <View>
                    
                </View>
            </ImageBackground>


      </View>
    )
  }