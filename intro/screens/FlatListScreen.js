import { Text, StyleSheet, View, FlatList, SectionList, ScrollView} from 'react-native'
import React, { Component} from 'react';

export default function FlatListScreen(){
    const datos=[
        {id: '1', nombre: 'Manzana'},
        {id: '2', nombre: 'Platano'},
        {id: '3', nombre: 'Naranja'},
        {id: '4', nombre: 'Uva'},
        {id: '5', nombre: 'Fresa'},
        {id: '6', nombre: 'Sandia'},
    ]

const secciones = [
    {
        titulo: 'frutas',
        data:[
            {nombre: 'Manzana'},
            {nombre: 'platano'},
            {nombre: 'Naranja'},
            {nombre: 'Uva'},

        ]
    },
    {
        titulo: 'verduras',
        data: [
            {nombre: 'Zanahoria'},
            {nombre: 'Lechuga'},
            {nombre: 'Tomate'},
            {nombre: 'Brocoli'},
        ]
    }
]

    return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.Titulo}>Ejemplo de FlatList</Text>
        <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({item})=>(
            <View style={styles.elementos}>
                <Text style={styles.text}>{item.nombre}</Text>
            </View>
        )}
        scrollEnable={false}
        ItemSeparatorComponent={()=><View style={styles.separador}/>}
        />
        <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>
        <SectionList
        sections={secciones}
        keyEtractor={(item, index)=> item.nombre + index}
        renderItem={({item})=>(
            <View style={styles.itemSeccion}>
                <Text style={styles.textItem}>
                    {item.nombre}
                </Text>

            </View>
        )}
        renderSectionHeader={({section:{titulo}})=>(
            <View style={styles.encabezado}>
                <Text style={styles.tituloSeccion}>{titulo}</Text>
            </View>
        )}
        scrollEnabled={false}
        stickySectionHeadersEnabled={false}
        />

        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#a1d0e2ff',
    },
    contet:{
        padding:20,
        paddingBottom:40,
    },
    Titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:20,
        marginBottom:20,
        textAlign:'center',
        color:'#33583fff',
    },
    Titulo2:{
        fontSize: 28,
        fontWeight: 'bold',
        marginTop:30,
        marginBottom:20,
        textAlign:'center',
        color:'#d371d3ff',
    },
    elementos:{
        width:'100%',
        height:80,
        backgroundColor:'#87d898ff',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
        borderRadius: 15,
        shadowColor:'#111111ff',
        shadowOffset:{
            width: 0,
        height:3,
        },
        shadowOpacity:0.2,
        shadowRadius:2,
        elevation:3
    },
    text:{
        fontSize:20,
        fontFamily: 'Times New Roman',
        color:'#5c855fff',
        fontWeight:'900',
        textDecorationLine:'underline',
    },
    separador:{
        height:10,
    },
    encabezado:{
        backgroundColor:'#c29ae2ff',
        padding:15,
        borderRadius:12,
        marginBottom:10,
        marginTop:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    tituloSeccion:{
        fontSize:22,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        fontFamily:'Times New Roman',

    },
    itemSeccion:{
        backgroundColor:'#836b96ff',
        padding:15,
        marginVertical:5,
        borderRadius:10,
        marginLeft:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.2,
        shadowRadius:2,
        elevation:3
    },
    textItem:{
        fontSize:18,
        fontWeight:'700',
        color:'#ffffffff',
        fontFamily:'Times New Roman',
    },


})
