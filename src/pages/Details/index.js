import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';

import styles from './styles';

export default function Details() {

  return (
    <LinearGradient colors={['#2DDCEB', '#35DE8C']} style={styles.container}>
      <Header title="Detalhes" />
    </LinearGradient>
  );

}