import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import dummyData from "../dummyData";
export default function ListComponent() {

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      );

      return (
        <ScrollView style={{backgroundColor: 'darkblue'}}>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={{textAlign: 'center', padding: 10, fontSize: 30}}>Dummy list.</Text>}
          ListFooterComponent={<Text style={{textAlign: 'center', padding: 10, fontSize: 30}}>End of list.</Text>}
          />
        </ScrollView>
      );
}


const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    textContainer: {
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
  });
