import React, {useEffect, useState} from 'react'
import {  Text, StyleSheet, View, ImageBackground, Animated, Easing, ScrollView } from 'react-native';

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
        <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.texto}>MIS DEBERES</Text>
        
        <View style={styles.elementos}>
          <Text style={styles.categoria}>Matematicas</Text>
          <Text style={styles.text}>-Resolver ejercicios de la pagina 222</Text>
          <Text style={styles.text}>-Hacer la tarea dejada en clase</Text>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.categoria}>Programació</Text>
          <Text style={styles.text}>-Terminar el código iniciado en clase</Text>
          <Text style={styles.text}>-Resar a dios</Text>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.categoria}>Base de datos</Text>
          <Text style={styles.text}>-Crear la base de datos para el proyecto</Text>
          <Text style={styles.text}>-Terminar algo</Text>
        </View>
        </ScrollView>
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
        fontFamily: 'Times New Romance',
        fontSize:32,
        color:'#030303ff',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:20,
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
    },
    elementos: {
    width: '100%',
    height: 100,
    backgroundColor: '#e7dd7cff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    },
    text: {
    fontSize: 16,
    fontFamily:'Courier',
    color:'#000000ff',
    fontWeight:'900',
    //fontStyle:'italic',
    //textDecorationLine:'underline',
  },
  categoria:{
    fontFamily: 'Times New Romance',
    fontSize:32,
    color:'#030303ff',
    fontWeight:'bold',
    //textDecorationLine:'underline',
    marginBottom:20
  },
});
