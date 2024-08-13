import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function Cards({name, type,image, hp, moves,weakness}) {
    return <View style={styles.card}>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤️{hp}</Text>
        </View>
        <Image source={image} style={styles.image}  accessibilityLabel={`${name} pokemon`}/>
        <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 20, padding: 5, color: 'midnightblue' }}>{type}</Text>
        </View>
        <View>
            <Text>Moves : {moves.join(", ")}</Text>
        </View>
        <View>
            <Text>Weakness : {weakness.join(", ")}</Text>
        </View>
    </View>
}

const styles =  StyleSheet.create({
    card : {
        backgroundColor: 'whtie',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {

            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    name : {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 16
    }
});