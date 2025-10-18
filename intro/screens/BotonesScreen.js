import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreen(){
    const [esEncendido, cambiarEncendido]=useState(false);
    const [color, cambiarColor] = useState('#ff01d9ff');

    return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Control de luz</Text>

        <Text style={[styles.luz,{color: esEncendido ? color:'black'}]}>
            {esEncendido ? 'Luz Encendida' : 'Luz Apagado'}

        </Text>

        <Switch
        value = {esEncendido}
        onValueChange = {() => cambiarEncendido(!esEncendido)}
        trackColor = {{ true: '#70ff83ff', false: '#6ac8ffff'}}
        ></Switch>

        <View style = {styles.cajaBotones}>
            <Button
            title='Azul'
            onPress={() =>esEncendido && cambiarColor('#59c9ddff')}
            color='#68a876ff'
            ></Button>
            <Button
            title='Rojo'
            onPress={() =>esEncendido && cambiarColor('#b31111ff')}
            color='#72b2e7ff'
            ></Button>
            <Button
            title='Naranja'
            onPress={() =>esEncendido && cambiarColor('#eb8736ff')}
            color='#68a876ff'
            ></Button>
            </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#e0b4d2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones:{
    flexDirection:'row',
    gap: 10,
    marginTop: 15,
  },
  titulo:{
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'blod',
  },
  luz:{
    fontSize:25,
    marginBottom: 15,
  },

})
