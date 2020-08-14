import React from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis">
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
        </View>
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