import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function ListItem({ item }) {

    const [favorite, setFavorite] = useState(false);
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Details', { item });
    }

    async function handleFavorite() {
        setFavorite(!favorite);
    }

    return (
        <TouchableOpacity style={styles.item} onPress={navigateToDetail}>
            <View style={styles.header}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity onPress={handleFavorite}>
                    <Feather name="heart" size={25} color={favorite ? "#F56459" : "#D9D9D9"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.content}>Endereço: {item.address}</Text>
                <Text style={styles.content}>Preço: R$:{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

}