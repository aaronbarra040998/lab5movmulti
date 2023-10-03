import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TrailersScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://imagenes.elpais.com/resizer/wxlB_VMwysDEUVnlSKNEzCn8Q8U=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/QRTEKUJL3FMC5OYH5BOQV2474Y.jpg' }} // Reemplaza con la URL de la imagen de fondo que desees
        style={styles.background}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Trailers Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default TrailersScreen;
