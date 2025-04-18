# HR Management Mobile App - Authentication

This module implements a complete authentication flow for the HR Management mobile app. The authentication system includes:

## Screens

1. **Login Screen** - Allows users to log in with their email and password.
2. **Register Screen** - Allows new users to create an account with name, email, and password.
3. **Forget Password Screen** - Allows users to request a password reset by verifying their email.
4. **Reset Password Screen** - Allows users to set a new password after email verification.

## Implementation

The authentication flow uses React Navigation Stack Navigator to handle transitions between screens.

### File Structure

```
src/
├── components/        # Reusable UI components
├── navigation/        # Navigation configuration
│   └── AuthNavigator.js
├── screens/
│   └── auth/
│       ├── LoginScreen.js
│       ├── RegisterScreen.js
│       ├── ForgetPasswordScreen.js
│       └── ResetPasswordScreen.js
└── services/
    └── authService.js  # API calls for authentication
```

### API Endpoints

The app connects to these backend endpoints:

- `POST /register` - User registration
- `POST /login` - User authentication
- `POST /forget-password` - Password reset request (email verification)
- `POST /reset-password` - Password change (with confirmation)

## How to Use

1. Start the authentication flow from the LoginScreen
2. Navigate to the RegisterScreen to create a new account
3. Navigate to ForgetPasswordScreen if the user forgot their password
4. After email verification, navigate to ResetPasswordScreen to set a new password

## Backend Connection

The app connects to the backend API using the authService.js file. Make sure to update the API_URL in the authService.js file to match your backend server address.

For Android emulator, use `10.0.2.2` to access the host machine's localhost. For iOS simulator, use `localhost`. 