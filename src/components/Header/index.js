import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Header({ title }) {
    const navigation = useNavigation();

    function navigateToFavorites() {
        navigation.navigate('Favorites');
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={navigateToFavorites}>
                <Feather name="list" size={30} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    );

}