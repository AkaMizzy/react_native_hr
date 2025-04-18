import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { login } from '../../services/authService';
import colors from '../../theme/colors';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import SocialButton from '../../components/ui/SocialButton';
import AuthHeader from '../../components/ui/AuthHeader';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await login(email, password);
      
      if (response.message === 'Login successful') {
        // Navigate to Home screen or save user info
        Alert.alert('Success', 'Logged in successfully!');
        // navigation.navigate('Home');
      } else {
        Alert.alert('Error', response.message || 'Login failed');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (type) => {
    Alert.alert('Info', `${type} login not implemented yet.`);
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer}
      style={styles.container}
    >
      <AuthHeader 
        title="Se connecter" 
      />
      
      <View style={styles.formContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity 
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgetPassword')}
        >
          <Text style={styles.forgotPasswordText}>Mot de passe oublié?</Text>
        </TouchableOpacity>
        
        <Button 
          title="Se connecter" 
          onPress={handleLogin}
          isLoading={loading}
          style={styles.loginButton}
        />
        
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>ou se connecter avec</Text>
          <View style={styles.socialButtons}>
            <SocialButton type="google" onPress={() => handleSocialLogin('Google')} />
            <SocialButton type="facebook" onPress={() => handleSocialLogin('facebook')} />
          </View>
        </View>
        
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Vous n'avez pas de compte? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: colors.link,
    fontSize: 14,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  socialText: {
    color: colors.textLight,
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    color: colors.text,
  },
  registerLink: {
    color: colors.link,
    fontWeight: '500',
  },
});

export default LoginScreen; 