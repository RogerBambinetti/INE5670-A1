import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Details" component={Details} />
                <AppStack.Screen name="Favorites" component={Favorites} />
            </AppStack.Navigator>
        </NavigationContainer >
    );
}