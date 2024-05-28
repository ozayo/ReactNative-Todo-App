// screens/EditTaskScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { TodosContext } from '../context/TodosContext';

export default function EditTaskScreen({ route, navigation }) {
  const { todo } = route.params;
  const { setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const updateTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, title, description } : item
      )
    );
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Edit Task</Text>
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
      <TouchableOpacity onPress={updateTodo} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
