import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { TodosContext } from '../context/TodosContext';

export default function DetailScreen({ route, navigation }) {
  const { todo } = route.params;
  const { setTodos } = useContext(TodosContext);

  const markAsCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, completed: true } : item
      )
    );
    navigation.goBack();
  };

  const unmarkAsCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, completed: false } : item
      )
    );
    navigation.goBack();
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Task Detail</Text>
      <View style={{ marginBottom : 10 }}>
        <Text style={globalStyles.itemtitle}>{todo.title}</Text>
        <Text>{todo.description}</Text>
      </View>
      {todo.completed ? (
        <TouchableOpacity onPress={unmarkAsCompleted} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Mark as not completed</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={markAsCompleted} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Mark as completed</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('EditTask', { todo })} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Edit Task</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteTodo} style={globalStyles.buttonDelete}>
        <Text style={globalStyles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}