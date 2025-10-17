import { Text, StyleSheet, View, Button, StatusBar } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBaScreen from './ImageBaScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndScreen from './ActivityIndScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu'); // ✅ Corregido

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'TextInput':
      return <TextInputScreen />;
    case 'ImageBa':
      return <ImageBaScreen />;
    case 'ScrollView':
      return <ScrollViewScreen />;
    case 'ActivityInd':
      return <ActivityIndScreen />;
    case 'FlatList':
      return <FlatListScreen />;
    case 'Modal':
      return <ModalScreen />;
    case 'BottomS':
      return <BottomSheetScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>

          <View style={styles.contenedorBotones2}>
            <Button color="#97ce97ff" onPress={() => setScreen('contador')} title="Pract: Contador" />
            <Button color="#73a6b6ff" onPress={() => setScreen('botones')} title="Pract: Buttons" />
            <Button color="#97ce97ff" onPress={() => setScreen('TextInput')} title="Pract: Text Input" />
            <Button color="#73a6b6ff" onPress={() => setScreen('ImageBa')} title="Pract: Image Background" />
            <Button color="#97ce97ff" onPress={() => setScreen('ScrollView')} title="Pract: Scroll View" />
            <Button color="#73a6b6ff" onPress={() => setScreen('ActivityInd')} title="Pract: Activity Indicator" />
            <Button color="#97ce97ff"onPress={() => setScreen('FlatList')} title="Pract: FlatList" />
            <Button color="#73a6b6ff" onPress={() => setScreen('Modal')} title="Pract: Modal" />
            <Button color="#97ce97ff"onPress={() => setScreen('BottomS')} title="Pract: Bottom Sheet" />
          </View>

          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 22,
    color: '#ffffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenedorBotones2: {
    marginTop: 20,
    flexDirection: 'column', 
    gap: 10,
  },
});
