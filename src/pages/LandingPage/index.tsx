import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

import api from '../../services/api';

const LandingPage: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadConnections() {
      const response = await api.get('/connections');

      const { total } = response.data;
      
      setTotalConnections(total);
    }

    loadConnections();
  },[]);

  function handleNavigationToClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigationToStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja Bem, vindo{'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigationToStudyPage} 
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigationToClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de { totalConnections } conexões já realizadas{ ' ' }
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}



export default LandingPage;