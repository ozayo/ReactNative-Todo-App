// screens/AddScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { TodosContext } from '../context/TodosContext';

export default function AddScreen({ navigation }) {
  const { setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), title, description, completed: false }
    ]);
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={globalStyles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={globalStyles.input}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
}
