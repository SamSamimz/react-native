import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen({ route }) {
    const { name } = route.params;
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to { name }</Text>
      <View>
        <Button title='Home' onPress={() => navigation.setParams({ name: "Devil" })}></Button>
        <Button title='Pass Param' onPress={() => navigation.navigate("Home", { data: 'Optional data goes here.' })}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
