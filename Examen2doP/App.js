import React, {useEffect, useState} from 'react'
import {  Text, StyleSheet, View, ImageBackground, Animated, Easing } from 'react-native';

export default function App() {

const [cargando, setcargando]= useState(true);
const desvanecido= new Animated.Value(1);

    useEffect(()=>{
        const timer= setTimeout(()=>{
            Animated.timing(desvanecido,{
                toValue: 0,
                duration: 800,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(()=> setcargando(false));
        }, 2000);
        return()=> clearTimeout(timer);
    },[]);


    if(cargando){
        return(
            <Animated.View style={[styles.splashConteiner, {opacity: desvanecido}]}>
                <ImageBackground
                source={require('../Examen2doP/assets/fondo.png')}
                resizeMode= 'contain'
                style={styles.splashImage}
                >
                    <Text style={styles.splashText}>Es hora de seguir estudiando c:</Text>
                    
                </ImageBackground>
            </Animated.View>
        );
    }

  return (

    <ImageBackground
      source={require('../Examen2doP/assets/fondosi.jpg')}
      resizeMode= 'cover'
      style={styles.backgrouns}
    >
        <Text style={styles.texto}>MIS DEBERES</Text>

    </ImageBackground>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  titulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  texto:{
        color:"#070707ff",
        fontSize:24,
        fontWeight: 'bold',
        alignItems: 'top',
        justifyContent: 'center',

    },
    backgrouns:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    splashText:{
        marginBottom: 90,
        fontSize: 20,
        color: "#0956fcff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashImage:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
    },

});
