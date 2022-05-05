import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';

import Data from '../../../data/habitations.json';

import styles from './styles';

export default function Favorites() {

  const [favorites, setFavorites] = useState({});

  function loadFavorites() {
    setFavorites(Data);
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Menu title="Favoritos" />
      <FlatList
        style={styles.content}
        data={favorites}
        renderItem={({ item }) =>
        (
          <ListItem item={item} />
        )}
      />
    </LinearGradient>
  );

}