import { StyleSheet, Text, View } from "react-native";

export default function Header({title}) {
    return <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
}

const styles =  StyleSheet.create({
    header: {
        backgroundColor: 'midnightblue',
        padding: 15,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 28
    }
});