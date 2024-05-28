// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, SectionList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { TodosContext } from '../context/TodosContext';

export default function HomeScreen({ navigation }) {
  const { todos, setTodos } = useContext(TodosContext);

  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  const sections = [
    { title: 'Todos', data: pendingTodos },
    { title: 'Genomfört', data: completedTodos }
  ];

  return (
    <View style={globalStyles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { todo: item })}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
      />
      <Button title="Add" onPress={() => navigation.navigate('Add')} />
    </View>
  );
}
