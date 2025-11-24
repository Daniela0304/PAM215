import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalle from '../screens/detalle';
import Profile from '../screens/profile2';


const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator >
        <Stack.Screen
            name="profileScreen"
            component={Profile}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Detalle"
            component={Detalle}
            options={{ title: "Detalles del usuario" }}
        />
        </Stack.Navigator>
    );
}
