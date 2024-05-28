// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodosProvider } from './context/TodosContext';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AddScreen from './screens/AddScreen';
import EditTaskScreen from './screens/EditTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TodosProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodosProvider>
  );
}
