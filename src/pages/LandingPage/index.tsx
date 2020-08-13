import React from 'react';
import { StyleSheet, View } from 'react-native';

const LandingPage: React.FC = () => {
  return (
    <View style={styles.container}>Hello World</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LandingPage;