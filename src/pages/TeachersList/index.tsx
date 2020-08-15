import React, { useState, } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function toggleFilters(){
    setFilterVisible(!isFilterVisible);
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeacher = JSON.parse(response);

        const favoritedTeachersIDs = favoritedTeacher.map((teacher: Teacher) => {
          return teacher.id;
        });

        setFavorites(favoritedTeachersIDs);
      }
    });
  }

  async function handleSubmit() {
    loadFavorites();
    const response = await api.get('/classes', {
      params: {
        subject, week_day, time
      }
    });

    setFilterVisible(false);
    setTeachers(response.data);
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
            value={subject}
            onChangeText={text => setSubject(text)}
            style={styles.input}
            placeholder="Qual matéria"
            placeholderTextColor="#C1BCCC"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput 
                value={week_day}
                onChangeText={text => setWeek_day(text)}
                style={styles.input}
                placeholder="Qual o dia?"  
                placeholderTextColor="#C1BCCC"
              />
            </View>
            <View style={styles.inputBlock}>
            <Text style={styles.label}>Horário</Text>
              <TextInput 
                value={time}
                onChangeText={text => setTime(text)}
                style={styles.input}
                placeholder="Qual horário?"  
                placeholderTextColor="#C1BCCC"
              />
            </View>
          </View>

          <RectButton 
            onPress={handleSubmit}
            style={styles.submitButton}
          >
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
        {teachers.map(
          (teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)}
              />
            );
          }
        )}
      </ScrollView>
      
    </View>
  );
}

export default TeacherList;