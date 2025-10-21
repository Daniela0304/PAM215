import { Text, StyleSheet, View, Button, TextInput, Alert} from 'react-native'
import React,{useState} from 'react';

export default function TextInputScreen(){
    const [nombre,setNombre] = useState('');
    const [password,setPassword] = useState('');
    const [telefono,setTelefono] = useState('');

    const mostrarAlerta = () => {
        if(nombre.trim() === '' || password.trim() === '' || telefono.trim() === ''){
            Alert.alert("Error favor de llenar todos los campos (movil)");
            alert("Favor de llenar todos los campos (web)");
        }else{
            Alert.alert("Datos ingresados"+
                `Nombre: ${nombre}\n
                Password: ${password}\n
                Telefono: ${telefono}`
            );
            alert ("Datos ingresados\n"+ `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`
            );
        }

    }

    return (
    <View style={styles.container}>
        <Text style= {styles.titulo}>TextInput & Alert</Text>
        <Text Text style={styles.etiquetas}>Nombre:</Text>
        <TextInput style={styles.input}
            placeholder='Escribe tu nombre aquí'
            value={nombre}
            onChangeText={setNombre}
        
        />
        <Text Text style={styles.etiquetas}>password:</Text>
        <TextInput style={styles.input}
            placeholder='Escribe tu contraseña'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />
        <Text Text style={styles.etiquetas}>Telefono:</Text>
        <TextInput style={styles.input}
            
            placeholder='Escribe tu telefono'
            keyboardType='phone-pad'
            value={telefono}
            onChangeText={setTelefono}
        />
        <Button
            title='Mostrar Alerta'
            onPress={mostrarAlerta}
            color='#8af08aff'
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e4addcff',
        alignItems: 'center',
        justifyContent:'center',
        justifyContent:'center'
    },
    titulo:{
        fontFamily: 'Times New Romance',
        fontSize:32,
        color:'#e630afff',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:20,
    },
    etiquetas:{
        fontSize:16,
        marginBottom:5,
        marginTop:10,
    },
    input:{
        width: '50%', //ocupa el ancho disponible
        borderWidth:2,//grosor del borde
        borderColor:'#426485ff',
        borderRadius:8,
        padding:10,
        marginBottom:15,
        backgroundColor:'#72b4c5ff',

    },
})
