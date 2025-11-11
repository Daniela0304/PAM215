

import { Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native'

import React, { useState } from 'react';


export default function activityIndScreen(){
    const[loading, setLoading] = useState(false);
    const startLoading = () => {
        setLoading(true);
        setTimeout(()=> setLoading(false), 3000)
    };

   
   
   
    if (loading){ 
        return(
        <View style={styles.container}>
        
            <View>
                <ActivityIndicator
                size="large"
                color= '#7cb4c2ff'
                animating={true}
                hidesWhenStopped={true}
                />
                <Text style={styles.texto}>Cargado... </Text>
            </View>
        </View>
        );
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Activity Indicator</Text>
            <Button  title="Carga de datos" onPress={startLoading}/>
        </View>
    )
    
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#000000ff',
    },
    texto:{
        color:'#ffffffff', 
    },
    title:{
        fontSize:25,
        alignContent:'center',
        justifyContent:'center',
        marginBottom:20,
        color:'#ffffffff', 
    }
});
