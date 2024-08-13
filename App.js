import { ScrollView, StyleSheet, Text, TextInput, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Todo from './components/Todo';
import Cards from './components/Cards';
import ListComponent from './components/ListComponent';
export default function App() {

  const cardData = {
    name: "Card",
    image: require('./assets/Pikachu.jpg'),
    type: "Fire",
    hp: 90,
    moves: ['Scratch', 'Ember', 'Growl'],
    weakness: ['Water'],
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <Header title="Mobile"/>
      <View style={{paddingHorizontal: 20}}>
          <View>
            <Text style={{fontSize: 30, paddingVertical: 10}}>Welcome to my first native app.</Text>
          </View>
        {/* <Todo /> */}
        {/* <Cards {...cardData}/>
        <Cards {...cardData}/>
        <Cards {...cardData}/>
        <Cards {...cardData}/> */}
        <ListComponent />
      </View>
    </ScrollView>
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
