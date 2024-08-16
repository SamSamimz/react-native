import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation , route}) {
    // const navigation =  useNavigation(); choice is mine.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>
      <Text style={styles.title}>{ route.params?.data }</Text>
      <View>
      <Button title='About' onPress={() => navigation.navigate('About')}></Button>
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
