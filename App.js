import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigator from './Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
