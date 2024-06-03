import React, { useState, useContext } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
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
      <Text style={globalStyles.h1}>Add new task</Text>
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
        multiline={true}
        numberOfLines={4}
        style={globalStyles.inputDesc}
      />
      <TouchableOpacity onPress={addTodo} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>+ Add new task</Text>
      </TouchableOpacity>
    </View>
  );
}
