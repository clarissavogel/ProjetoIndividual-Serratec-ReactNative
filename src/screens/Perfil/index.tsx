import React, { useState, useEffect } from 'react';
import { Text , TouchableOpacity, View, Image, TextInput, ImageBackground, ScrollView, StatusBar} from 'react-native';
import { styles } from './styles';

import { ButtonQuestion } from '../../components/ButtonQuestion';
import { ButtonBell } from '../../components/ButtonBell';
import { ButtonEdit } from '../../components/ButtonEdit';
import { ButtonNewList } from '../../components/ButtonNewList';
import { ButtonSeeMore } from '../../components/ButtonSeeMore';
import { ButtonFolder } from '../../components/ButtonFolder';
import { ButtonsFollowers } from '../../components/ButtonsFollowers';
import { ButtonConfig } from '../../components/ButtonConfig';
import { ButtonShare } from '../../components/ButtonShare';
import { CardTimeTV } from '../../components/CardTimeTV';
import { CardWatchedEpisodes } from '../../components/CardWatchedEpisodes';
import { CardTimeMovies } from '../../components/CardTimeMovies';
import { CardWatchedMovies } from '../../components/CardWatchedMovies';
import { Navbar } from '../../components/Navbar';


import Outlander from '../../assets/outlander.jpg';
import ImgPerfil from '../../assets/perfilimagem.jpg';
import Brooklyn99 from '../../assets/brooklyn99poster.jpg';
import Friends from '../../assets/friendsposter.jpg';
import Handsmaid from '../../assets/thehandsmaidstaleposter.jpg';
import EmilyInParis from '../../assets/emilyinparisposter.jpg';
import WandaVision from '../../assets/wandavisionposter.jpg';
import OutlanderPoster from '../../assets/outlanderposter.jpg';
import StrangerThings from '../../assets/strangerthingsposter.jpg';
import PrisionBreak from '../../assets/prisionbreakposter.jpg';
import Loki from '../../assets/lokiposter.jpg';
import Greys from '../../assets/greysanatomyposter.jpg';
import Dark from '../../assets/darkposter.jpg';
import BreakingBad from '../../assets/breakingbadposter.jpg';

import Avengers from '../../assets/avengers.jpg';
import DoctorStrange from '../../assets/doctorstrange2.jpg';
import DonnieDarko from '../../assets/donniedarko.jpg';
import Endgame from '../../assets/endgame.jpg';
import Spider1 from '../../assets/homemaranhadevoltaaolar.jpg';
import Spider2 from '../../assets/homemaranhalongedecasa.jpg';
import Spider3 from '../../assets/homemaranhasemvoltapracasa.jpg';
import IronMan from '../../assets/homemdeferro.jpg';
import Inception from '../../assets/inception.jpg';
import Interestelar from '../../assets/interestelar.jpg';
import QuietPlace from '../../assets/umlugarsilencioso.jpg';


import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';





export const Perfil = () =>{

    return(
    
      <View style={styles.container}>
        <StatusBar barStyle='dark-content'></StatusBar>
        <ScrollView>
            <ImageBackground source={Outlander} style={styles.imagem}>
                <View style={styles.contentInfo}>
                    <ButtonQuestion/>
                    <ButtonBell/>
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
                <ButtonShare/>
            </View>
            <View style={styles.contentEditProfile}>
                <ButtonEdit/>
            </View>


            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}>
                    <CardTimeTV/>

                    <CardWatchedEpisodes/>

                    <CardTimeMovies/>

                    <CardWatchedMovies/>
            </ScrollView>

            <View style={styles.contentNewList}>
                <Text style={styles.textTitle}>Listas de seriados</Text>
                <ButtonNewList/>
            </View>

            <View style={styles.contentSeriesMovies}>
                <Text style={styles.textTitle}>Séries</Text>
                <ButtonSeeMore/>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={styles.imageFolder} source={Brooklyn99}></Image>
                <Image style={styles.imageFolder} source={BreakingBad}></Image>
                <Image style={styles.imageFolder} source={Handsmaid}></Image>
                <Image style={styles.imageFolder} source={EmilyInParis}></Image>
                <Image style={styles.imageFolder} source={PrisionBreak}></Image>
                <Image style={styles.imageFolder} source={Loki}></Image>  
            </ScrollView>

            <View style={styles.contentSeriesMovies}>
                <Text style={{fontSize:18}}>Séries favoritas</Text>
                <ButtonSeeMore/>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={styles.imageFolder} source={Dark}></Image>
                <Image style={styles.imageFolder} source={OutlanderPoster}></Image>
                <Image style={styles.imageFolder} source={Greys}></Image>
                <Image style={styles.imageFolder} source={Friends}></Image>
                <Image style={styles.imageFolder} source={StrangerThings}></Image>
                <Image style={styles.imageFolder} source={WandaVision}></Image>
                <ButtonFolder/>
            </ScrollView>

            <View style={styles.divisao}></View>

            <View style={styles.contentSeriesMovies}>
                <Text style={styles.textTitle}>Filmes</Text>
                <ButtonSeeMore/>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={styles.imageFolder} source={QuietPlace}></Image>
                <Image style={styles.imageFolder} source={Inception}></Image>
                <Image style={styles.imageFolder} source={Interestelar}></Image>
                <Image style={styles.imageFolder} source={DoctorStrange}></Image>
                <Image style={styles.imageFolder} source={Endgame}></Image>
                <Image style={styles.imageFolder} source={IronMan}></Image>
            </ScrollView>

            <View style={styles.contentSeriesMovies}>
                <Text style={{fontSize:18}}>Filmes favoritos</Text>
                <ButtonSeeMore/>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={styles.imageFolder} source={Endgame}></Image>
                <Image style={styles.imageFolder} source={Avengers}></Image>
                <Image style={styles.imageFolder} source={DonnieDarko}></Image>
                <Image style={styles.imageFolder} source={Spider1}></Image>
                <Image style={styles.imageFolder} source={Spider2}></Image>
                <Image style={styles.imageFolder} source={Spider3}></Image>
                <ButtonFolder/>
            </ScrollView>

            <View style={styles.divisao}></View>

            <ButtonsFollowers/>
            <ButtonConfig/>

        </ScrollView>
        
        <Navbar/>

      </View>
    )
  }