// context/TodosContext.js
import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Städa', description: 'Städa beskrivning', completed: false },
    { id: '2', title: 'Diska', description: 'Diska beskrivning', completed: false }
  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
