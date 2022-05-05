import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Menu({ title, active }) {
    const navigation = useNavigation();

    const [activeItems, setActiveItems] = useState([]);

    function handleNavigate(page) {
        if (page) {
            navigation.navigate(page);
            setActiveItems([page]);
        }
    }

    return (
        <View style={styles.menu}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => handleNavigate("Home")}>
                    <Feather name="home" size={25} color="#F2F2F2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate("Favorites")}>
                    <Feather name="heart" size={25} color="#F2F2F2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate()}>
                    <Feather name="user" size={25} color="#F2F2F2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigate()}>
                    <Feather name="tool" size={25} color="#F2F2F2" />
                </TouchableOpacity>
            </View>
        </View>
    );

}