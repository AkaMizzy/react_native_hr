import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../theme/colors';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ 
          title: 'Se Connecter',
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ 
          title: 'Créer un Compte',
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="ForgetPassword" 
        component={ForgetPasswordScreen} 
        options={{ 
          title: 'Mot de Passe Oublié',
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="ResetPassword" 
        component={ResetPasswordScreen} 
        options={{ 
          title: 'Réinitialiser Mot de Passe',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator; 