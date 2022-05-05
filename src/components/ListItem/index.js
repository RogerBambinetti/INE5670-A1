import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function ListItem({ item }) {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Details', { item });
    }

    return (
        <TouchableOpacity style={styles.item} onPress={navigateToDetail}>
            <View style={styles.image}>

            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{item.name}</Text>
                <Feather name="arrow-right" size={25} color="#D9D9D9" />
            </View>
            <View style={styles.body}>
                <Text style={styles.content}>Endereço: {item.address}</Text>
                <Text style={styles.content}>Preço: R$:{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

}