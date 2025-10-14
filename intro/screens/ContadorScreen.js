import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  const[contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto} >Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>

      <Button color='#083d11ff' title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button color='#083d11ff' title='Quitar' onPress={()=>setContador(contador-1)}></Button>
      <Button color='#083d11ff' title='Reiniciar' onPress={()=>setContador(contador*0)}></Button>

      </View>

      <StatusBar style="auto" />

    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cde7c8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontFamily:"Times New Roman",
    fontSize:30,
    color: '#253d29ff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    //textDecorationLine:'line-through'
  },

  texto2:{
    fontFamily:"Courier",
    fontSize:40,
    color: '#030000ff',
    fontWeight: '500',
    fontStyle: 'italic',
    textDecorationLine:'underline'
  },

  contenedorBotones:{
    marginTop:20,
    flexDirection:"row",
    gap:20,

  },

});
