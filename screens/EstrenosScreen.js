import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const EstrenosScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/vector-premium/diseno-cartel-estreno-cine-pelicula-fondo-vector-cine-pantalla-cine-blanco_165143-1171.jpg' }} // Reemplaza con la URL de la imagen de fondo que desees
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Estrenos Screen</Text>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semi-transparente
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
    color: 'white', // Color del texto
    fontWeight: 'bold', // Fuente en negrita
    textShadowColor: 'black', // Sombra de texto
    textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    textShadowRadius: 4, // Radio de la sombra
  },
});

export default EstrenosScreen;
