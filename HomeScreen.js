import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Rotate the planet icon continuously
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const handlePress = () => {
    navigation.navigate('Planets');
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const planetStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']} // Refined gradient colors
        style={styles.background}
      >
        {/* Animated Planet Icon */}
        <Animated.View style={[styles.planet, planetStyle]}>
          <Ionicons name="planet" size={100} color="#FFF" />
        </Animated.View>

        {/* Text Overlay */}
        <Text style={styles.title}>Cyber Planet</Text>
        <Text style={styles.subtitle}>Exploring the World of Cybersecurity</Text>

        {/* "Take me there!" Button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <LinearGradient
            colors={['#12c2e9', '#c471ed', '#f64f59']} // Vibrant gradient for the button
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Take me there!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planet: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#1f4068',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#00e6e6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    textShadowColor: '#00e6e6',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#dcdde1',
    marginTop: 5,
    fontStyle: 'italic',
  },
  button: {
    marginTop: 40,
    borderRadius: 30,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
