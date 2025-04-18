import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { resetPassword } from '../../services/authService';
import colors from '../../theme/colors';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import AuthHeader from '../../components/ui/AuthHeader';

const ResetPasswordScreen = ({ route, navigation }) => {
  const { email } = route.params || {};
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Email is missing. Please go back to the forgot password screen.');
      return;
    }

    if (!newPassword || !confirmNewPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const response = await resetPassword(email, newPassword, confirmNewPassword);
      
      if (response.message === 'Password has been reset successfully') {
        Alert.alert('Success', 'Password reset successful!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert('Error', response.message || 'Password reset failed');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer}
      style={styles.container}
    >
      <AuthHeader 
        title="Réinitialiser le mot de passe" 
        subtitle="Créez un nouveau mot de passe pour votre compte"
      />
      
      <View style={styles.formContainer}>
        <Text style={styles.emailDisplay}>
          Email: {email}
        </Text>
        
        <Input
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
        
        <Input
          placeholder="Confirmer le nouveau mot de passe"
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
          secureTextEntry
        />
        
        <Button 
          title="Réinitialiser le mot de passe" 
          onPress={handleResetPassword}
          isLoading={loading}
          style={styles.resetButton}
        />
        
        <TouchableOpacity 
          style={styles.backLink}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backLinkText}>Retour</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emailDisplay: {
    marginBottom: 20,
    fontWeight: '500',
    color: colors.text,
  },
  resetButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  backLink: {
    alignItems: 'center',
    marginTop: 10,
  },
  backLinkText: {
    color: colors.link,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ResetPasswordScreen; 