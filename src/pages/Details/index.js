import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Menu from '../../components/Menu';

import styles from './styles';

export default function Details() {

  const route = useRoute();
  const item = route.params.item;

  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
    AsyncStorage.setItem(item.id, favoriteArray);
  }

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Menu title="Detalhes" />
      <View style={styles.imageContainer}>
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.overlay} />
        <Image style={styles.image} source={{ uri: "https://www.plantapronta.com.br/projetos/161/02.jpg" }} />
        <TouchableOpacity style={styles.favorite} onPress={handleFavorite}>
          <MaterialCommunityIcons name={favorite ? "heart" : "heart-outline"} size={35} color={favorite ? "#F56459" : "#D9D9D9"} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
        <Text>{item.price}</Text>
        <Text>{item.area}</Text>
        <Text>{item.accomodations}</Text>
        <Text>{item.phone}</Text>
        <Text>{item.email}</Text>
        <Text>{item.observations}</Text>
      </View>
    </LinearGradient>
  );

}