import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
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
  const [pictureIndex, setPictureIndex] = useState(0);

  useEffect(async () => {
    const favorites = await AsyncStorage.getItem('favorites') || {};
    setFavorite(JSON.parse(favorites)[item.id]);
  }, []);

  async function handleFavorite() {
    try {
      const value = !favorite;
      const favorites = JSON.parse(await AsyncStorage.getItem('favorites')) || {};
      favorites[item.id] = value;

      setFavorite(value);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error(error);
    }
  }

  function handlePictureChange() {
    const value = pictureIndex == (item.pictures.length - 1) ? 0 : (pictureIndex + 1);
    setPictureIndex(value);
  }

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Menu title="Detalhes" />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.imageContainer} onPress={handlePictureChange}>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.overlay} />
          <Image style={styles.image} source={{ uri: item.pictures[pictureIndex] }} />
          <TouchableOpacity style={styles.favorite} onPress={handleFavorite}>
            <MaterialCommunityIcons name={favorite ? "heart" : "heart-outline"} size={35} color={favorite ? "#F56459" : "#D9D9D9"} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.fieldName}>Nome</Text>
          <Text style={styles.fieldValue}>{item.name}</Text>
          <Text style={styles.fieldName}>Quantidade de alojamentos</Text>
          <Text style={styles.fieldValue}>{item.accommodations}</Text>
          <Text style={styles.fieldName}>Endereço</Text>
          <Text style={styles.fieldValue}>{item.address}</Text>
          <Text style={styles.fieldName}>Valor/mês</Text>
          <Text style={styles.fieldValue}>{item.price}</Text>
          <Text style={styles.fieldName}>Gênero</Text>
          <Text style={styles.fieldValue}>{item.genderKind}</Text>
          <Text style={styles.fieldName}>Tipo de alojamento</Text>
          <Text style={styles.fieldValue}>{item.accommodationKind}</Text>
          <Text style={styles.fieldName}>Mobília</Text>
          <Text style={styles.fieldValue}>{item.furnitureDescriptions}</Text>
          <Text style={styles.fieldName}>Tipo de banheiro</Text>
          <Text style={styles.fieldValue}>{item.bathroomKind}</Text>
          <Text style={styles.fieldName}>Área(m²)</Text>
          <Text style={styles.fieldValue}>{item.area}</Text>
          <Text style={styles.fieldName}>Descrição de áreas</Text>
          <Text style={styles.fieldValue}>{item.roomsDescription}</Text>
          <Text style={styles.fieldName}>E-mail</Text>
          <Text style={styles.fieldValue}>{item.email}</Text>
          <Text style={styles.fieldName}>Observações adicionais</Text>
          <Text style={styles.fieldValue}>{item.observations}</Text>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="phone" size={20} color="#F2F2F2" />
            <Text style={styles.buttonText}>LIGAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="map" size={20} color="#F2F2F2" />
            <Text style={styles.buttonText}>MAPA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name="play" size={20} color="#F2F2F2" />
            <Text style={styles.buttonText}>VÍDEO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );

}