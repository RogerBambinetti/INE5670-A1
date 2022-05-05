import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';

import Data from '../../../data/habitations.json';

export default function Home() {

  const [habitations, setHabitations] = useState([]);

  function loadHabitations() {
    setHabitations(Data);
  }

  useEffect(() => {
    loadHabitations();
  }, []);

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Menu title="Moradias" />
      <FlatList
        style={styles.content}
        data={habitations}
        renderItem={({ item }) =>
        (
          <ListItem item={item} />
        )}
      />
    </LinearGradient>
  );

}