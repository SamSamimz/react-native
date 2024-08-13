import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validation = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validation()) {
      Alert.alert('Login', 'Login logic goes here.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100} style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image
        source={{ uri: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg' }}
        style={styles.image}
      />
      <TextInput
        style={[styles.input, {borderColor: errors.username ? 'red' : '#ddd'}]}
        placeholder="Username"
        keyboardType="default"
        value={username}
        onChangeText={setUsername}
      />
      {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
      <TextInput
        style={[styles.input, {borderColor: errors.username ? 'red' : '#ddd'}]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
});
