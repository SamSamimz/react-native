import { ScrollView, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import Header from './components/Header';
import Todo from './components/Todo';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="Mobile"/>
      <View style={{paddingHorizontal: 20}}>
          <View>
            <Text>Welcome to my first native app.</Text>
          </View>
        <Todo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    paddingTop: 10,
  }
});
