import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { FlatList, Text, View, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';

export default function FetchData() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            setPosts(response.data);
        } catch (err) {
            setError('Failed to fetch data');
            console.error(err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View>
        <FlatList
            data={posts}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </View>
            )}
            keyExtractor={item => item.id.toString()}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                />
            }
            contentContainerStyle={styles.list}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 14,
        fontWeight: 'italic',
    },
    list: {
        flexGrow: 1,
        padding: 16,
    },
});
