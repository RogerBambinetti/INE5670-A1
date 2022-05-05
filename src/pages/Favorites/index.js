import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';

import Data from '../../../data/habitations.json';

import styles from './styles';

export default function Favorites() {

  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    const items = JSON.parse(await AsyncStorage.getItem('favorites')) || {};

    const data = Data.filter(item => {
      return items[item.id];
    });

    setFavorites(data);
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Menu title="Favoritos" />
      {favorites.length ?
        <FlatList
          style={styles.content}
          data={favorites}
          renderItem={({ item }) =>
          (
            <ListItem item={item} />
          )}
        />
        : <Text style={styles.text}>Não há favoritos</Text>}
    </LinearGradient>
  );

}