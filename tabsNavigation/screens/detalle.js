import { View, Text, Button, StyleSheet } from 'react-native';

export default function Detalle({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle del usuario</Text>

            <Button 
                title="Regresar al perfil"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'green',
    }
});
