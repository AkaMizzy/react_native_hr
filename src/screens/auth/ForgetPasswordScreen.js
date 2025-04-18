import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { forgetPassword } from '../../services/authService';
import colors from '../../theme/colors';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import AuthHeader from '../../components/ui/AuthHeader';

const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    try {
      setLoading(true);
      const response = await forgetPassword(email);
      
      if (response.emailVerified) {
        Alert.alert('Success', 'Email verified! You can now reset your password.');
        navigation.navigate('ResetPassword', { email });
      } else {
        Alert.alert('Error', response.message || 'Email verification failed');
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
        title="Mot de passe oublié" 
        subtitle="Entrez votre adresse e-mail pour vérifier votre compte"
      />
      
      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Button 
          title="Vérifier Email" 
          onPress={handleForgetPassword}
          isLoading={loading}
          style={styles.verifyButton}
        />
        
        <TouchableOpacity 
          style={styles.backLink}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backLinkText}>Retour à la connexion</Text>
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
  verifyButton: {
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

export default ForgetPasswordScreen; 