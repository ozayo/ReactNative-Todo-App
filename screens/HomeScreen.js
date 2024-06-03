import React, { useContext } from 'react';
import { View, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { TodosContext } from '../context/TodosContext';

export default function HomeScreen({ navigation }) {
  const { todos, setTodos } = useContext(TodosContext);

  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  const sections = [
    { title: 'Tasks', data: pendingTodos },
    { title: 'Completed', data: completedTodos }
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>My Todos</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { todo: item })}>
            <View style={globalStyles.itemContainer}>
              <Image 
                source={item.completed ? require('../assets/check.png') : require('../assets/uncheck.png')} 
                style={globalStyles.itemImage} 
              />
              <Text style={globalStyles.itemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={globalStyles.h2}>{title}</Text>
        )}
      />
    </View>
  );
}
