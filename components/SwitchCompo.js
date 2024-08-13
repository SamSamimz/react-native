import { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native"

export default function SwitchCompo() {
    const [isDarkMode, setIsDarkMode]  = useState(false);

    return <View style={{flex: 1}}>
        <Text>Dark Mode</Text>
        <Switch value={isDarkMode}
        onValueChange={() => setIsDarkMode((prev) => !prev)}
        trackColor={{false: "red", true: 'green'}}/>
        <View style={[styles.bg,{backgroundColor: isDarkMode ? '#000' : '#f90'}]}></View>
    </View>
}
const styles = StyleSheet.create({
    bg: {
        height: 500,
        width: '100$',
    }
});