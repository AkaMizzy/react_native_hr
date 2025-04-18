import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../theme/colors';

// Using the provided image
const AuthHeader = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <View style={styles.illustrationBackground}>
          <Image
            source={require('../../assets/images/pic1.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  illustrationContainer: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  illustrationBackground: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures the image doesn't overflow the circle
    borderWidth: 3,
    borderColor: colors.primary,
    borderStyle: 'solid',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default AuthHeader; 