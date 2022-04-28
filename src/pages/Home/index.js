import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

import ListItem from '../../components/ListItem';
import Header from '../../components/Header';

import * as Data from '../../../data/habitations.json';

export default function Home() {

  const [habitations, setHabitations] = useState({});

  function loadHabitations() {
    const array = [];

    for (const index in Data) {
      if (index !== 'default') {
        Data[index].index = index;
        array.push(Data[index]);
      }
    }

    setHabitations(array);
  }

  useEffect(() => {
    loadHabitations();
  }, []);

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Header title="Moradias" />
      <FlatList
        style={styles.list}
        data={habitations}
        renderItem={({ item }) =>
        (
          <ListItem item={item} />
        )}
      />
    </LinearGradient>
  );

}