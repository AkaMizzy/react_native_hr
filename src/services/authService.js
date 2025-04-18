const API_URL = 'https://b8aa-196-78-90-20.ngrok-free.app/api';  // Use 10.0.2.2 for Android emulator or localhost IP

export const register = async (name, email, password, confirmPassword) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await fetch(`${API_URL}/forget-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Forget password error:', error);
    throw error;
  }
};

export const resetPassword = async (email, newPassword, confirmNewPassword) => {
  try {
    const response = await fetch(`${API_URL}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, newPassword, confirmNewPassword }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Reset password error:', error);
    throw error;
  }
}; 