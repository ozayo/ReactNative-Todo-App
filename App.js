import React from 'react';
import { TodosProvider } from './context/TodosContext';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <TodosProvider>
      <StackNavigator />
    </TodosProvider>
  );
}