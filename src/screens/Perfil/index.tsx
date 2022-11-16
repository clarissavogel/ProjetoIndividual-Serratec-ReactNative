import React, { useState, useEffect } from 'react';
import { Text , TouchableOpacity, View, Image, TextInput, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles';

import Outlander from '../../assets/outlander.jpg';
import ImgPerfil from '../../assets/perfilimagem.jpg';
import Brooklyn99 from '../../assets/brooklyn99poster.jpg';
import Friends from '../../assets/friendsposter.jpg';
import Handsmaid from '../../assets/thehandsmaidstaleposter.jpg';
import EmilyInParis from '../../assets/emilyinparisposter.jpg';

import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export const Perfil = () =>{

    return(
      <View style={styles.container}>
        <ScrollView>
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

                <View style={styles.contentImagePerfil}>
                    <Image style={styles.imagePerfil} source={ImgPerfil}></Image>
                </View>
            </ImageBackground>


                <View style={styles.contentName}>
                    <Text style={styles.name}>Clarissa Vogel</Text>
                    <TouchableOpacity>
                        <SimpleLineIcons name="share-alt" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentEditProfile}>
                    <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonEdit}>
                        <Text style={{fontSize: 14}}>EDITAR</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                    <View style={styles.contentTimeWatching}>
                        <View style={styles.contentTitleTime}>
                            <Text style={styles.titleTime}>TEMPO VENDO TV</Text>
                        </View>
                        <View style={styles.contentCountTime}>
                            <Text style={styles.textNumberTime}>03</Text>
                            <Text style={styles.textNumberTime}>15</Text>
                            <Text style={styles.textNumberTime}>00</Text>
                        </View>
                        <View style={styles.contentTextTime}>
                            <Text style={styles.textTime}>Meses</Text>
                            <Text style={styles.textTime}>Dias</Text>
                            <Text style={styles.textTime}>Horas</Text>
                        </View>
                    </View>

                    <View style={styles.contentTimeWatching}>
                        <View style={styles.contentTitleTime}>
                            <Text style={styles.titleTime}>EPISÓDIOS ASSISTIDOS</Text>
                        </View>
                        <View style={styles.contentCountEpisodes}>
                            <Text style={styles.textNumberTime}>3.7K</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.contentNewList}>
                    <Text style={styles.textSeries}>Listas de seriados</Text>
                    <TouchableOpacity style={styles.buttonNewList}>
                        <Entypo name="plus" size={50} color="#A9AAA8" />
                        <Text style={{color:"#A9AAA8"}}>CRIAR UMA NOVA LISTA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contentSeries}>
                    <Text style={styles.textSeries}>
                        Séries
                    </Text>
                    <TouchableOpacity
                    activeOpacity={0.7}>
                        <Text style={styles.textSeeMore}>VER MAIS</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                    <Image style={styles.contentLastWatchedSeries} source={Brooklyn99}></Image>
                    <Image style={styles.contentLastWatchedSeries} source={Friends}></Image>
                    <Image style={styles.contentLastWatchedSeries} source={Handsmaid}></Image>
                    <Image style={styles.contentLastWatchedSeries} source={EmilyInParis}></Image>
                </ScrollView>

        </ScrollView>
        
        <View style={styles.navbar}>
            <View>
                <Feather name="tv" size={24} color="black" />
                <Text>Séries</Text>
            </View>
        </View>

      </View>
    )
  }