import React, { useState } from 'react';
import { Text, StyleSheet, View, Modal, Pressable, TextInput } from 'react-native'

export default function ModalScreen(){
    const[mostrar,  setMostrar] = useState(null);

    return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>

        <Pressable style={styles.boton} onPress={()=> setMostrar('login')}>
            <Text style={styles.text}>Iniciar sesión</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=> setMostrar('registro')}>
            <Text style={styles.text}>Registrarse</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=> setMostrar('alerta')}>
            <Text style={styles.text}>Alerta</Text>
        </Pressable>

        <Modal
        animationType='slide'
        transparent={false}
        visible={mostrar === 'login'}
        onRequestClose={()=> setMostrar(null)}
        >

        <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario inicio de sesión</Text>

            <TextInput placeholder='Ingrese su usuario' style={styles.input}/>
            <TextInput placeholder='Ingrese su contraseña' secureTextEntry={true} style={styles.input}/>
            
            <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
                <Text style={styles.text}>Iniciar sesión</Text>
            </Pressable>
        </View>

        </Modal>
        <Modal
        animationType='slide'
        transparent={false}
        visible={mostrar === 'registro'}
        onRequestClose={()=> setMostrar(null)}
        >

        <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario inicio de sesión</Text>

            <TextInput placeholder='Ingrese su usuario' style={styles.input}/>
            <TextInput placeholder='Ingrese su Email' keyboardType={'email-address'} style={styles.input}/>
            <TextInput placeholder='Ingrese su contraseña' secureTextEntry={true} style={styles.input}/>
            
            <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
                <Text style={styles.text}>Registrarse</Text>
            </Pressable>
        </View>

        </Modal>

        <Modal
        animationType='fade'
        transparent={false}
        visible={mostrar === 'alerta'}
        onRequestClose={()=> setMostrar(null)}
        >

            <View style={styles.container3}>
                <View style={styles.containerAlerta}>

                    <Text style={styles.textAlerta}>Esto es una alerta</Text>
                    <View style={styles.containerBoton}>
                        
                        <Pressable style={styles.boton1} onPress={()=> setMostrar(null)}>
                        <Text style={styles.text}>ok</Text>
                        </Pressable>

                        <Pressable style={styles.boton2} onPress={()=> setMostrar(null)}>
                        <Text style={styles.text}>Cerrar</Text>
                        </Pressable>

                    </View>

                </View>
                
            </View>

        </Modal>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#695669ff',
    },
    container2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c987c9ff',
    },
    container3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#351135ff',
    },
    boton:{
        backgroundColor:'#351135ff',
        padding:15,
        borderRadius:20,
        marginBottom: 15,
        width:'70%',
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:500,
    },
    titulo:{
        fontSize:25,
        marginBottom:20,
    },
    input:{
        width:'80%',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:10,
        marginBottom:20,
        padding:15,
        backgroundColor:'#cfaccfff',
    },
    containerAlerta:{
        width:300,
        height:200,
        backgroundColor:'#ddd0ddff',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:20,
    },
    textAlerta:{
        fontSize:20,
        color:'#3b233bff',
        arginBottom:20,

    },
    boton1:{
        backgroundColor:'#ae00daff',
        padding:15,
        borderRadius:20,
        marginBottom: 10,
        width:100,
        alignItems:'center',
    },
    boton2:{
        backgroundColor:'#a66bc9ff',
        padding:15,
        borderRadius:20,
        marginBottom: 10,
        width:100,
        alignItems:'center',
    },
    containerBoton:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:25,
        width:'80%',

    },
    
});
