import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';


const TeacherList: React.FC = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  function toggleFilters(){
    setFilterVisible(!isFilterVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys Disponíveis" 
        headerRight={(
          <BorderlessButton onPress={toggleFilters}>
            <Feather name="filter" size={20} color='#FFF'/>
          </BorderlessButton>
        )}
      >
      { isFilterVisible && (
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput 
            style={styles.input}
            placeholder="Qual matéria"
            placeholderTextColor="#C1BCCC"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput 
                style={styles.input}
                placeholder="Qual o dia?"  
                placeholderTextColor="#C1BCCC"
              />
            </View>
            <View style={styles.inputBlock}>
            <Text style={styles.label}>Horário</Text>
              <TextInput 
                style={styles.input}
                placeholder="Qual horário?"  
                placeholderTextColor="#C1BCCC"
              />
            </View>
          </View>

          <RectButton style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Buscar</Text>
          </RectButton>
        </View> )
      }
      </PageHeader>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
      
    </View>
  );
}

export default TeacherList;