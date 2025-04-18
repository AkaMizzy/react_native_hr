import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const SocialButton = ({ type, onPress }) => {
  const getIconName = () => {
    switch (type) {
      case 'google':
        return 'logo-google';
      case 'github':
        return 'logo-github';
      default:
        return 'logo-google';
    }
  };

  const getButtonColor = () => {
    switch (type) {
      case 'google':
        return colors.google;
      case 'github':
        return colors.github;
      default:
        return colors.primary;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.white }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Icon
          name={getIconName()}
          size={20}
          color={getButtonColor()}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    margin: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SocialButton; 