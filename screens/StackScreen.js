import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const StackScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://imagenes.elpais.com/resizer/1jKjJ8Qhf6EjFcKifzFdppWczHQ=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IP2TWFD7TRAKVBDZ7DHKZTNBRE.jpg' }} // Reemplaza con la URL de la imagen de fondo de Netflix
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Acerca de Netflix</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ex nec eros interdum efficitur. Fusce tincidunt, metus a condimentum fermentum, eros odio viverra nisi, eu vehicula ex justo id urna.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    lineHeight: 24,
  },
});

export default StackScreen;
