import { useEffect, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState('');
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://reqres.in/api/todos');
                if(!response.ok) {
                    throw new Error('Error fetching JSON response');
                }
                const result = response.json();
                // console.log("Asche data");
            }catch (e) {
                setError(e.message);
             }
        }
        fetchData();

    },[]);

    const getnewTodo = (todoText) => {
        setNewTodo(todoText);
    }
    const deleteTodo = (todo) => {
        Alert.alert(todo);
    }
    const handleTodo = () => {
        if(newTodo.trim()) {
            setTodos(prevTodos => [...prevTodos, newTodo]);
            console.log(todos);
            setNewTodo('');
        }else {
            Alert.alert(
                'Input error',
                'Please enter a todo.'
            );
        }
    }
    return <View>
        <Text style={{fontSize: 30,textAlign: 'center',paddingBottom: 10}}>Todo List</Text>
        <TextInput placeholder="Enter new todo..." style={{borderBottomColor: 'midnightblue',paddingBottom: 10,marginBottom: 5, borderBottomWidth: 1 / 3}}
        value={newTodo} onChangeText={getnewTodo} />
        <Button title="Add Todo" color='crimson' onPress={handleTodo}/>
        <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.todoItem} onPress={() =>deleteTodo(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()} // Use index as key
            />
    </View>
}

const styles =  StyleSheet.create({
    todoItem: {
        fontSize: 18,
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
});