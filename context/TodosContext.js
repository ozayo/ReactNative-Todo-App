// context/TodosContext.js
import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Dont forget todo-app task', description: 'Dont forget to finish todays task, todo mobile app.', completed: false },
    { id: '2', title: 'Learn React', description: 'Learn React better', completed: true },
    { id: '3', title: 'Long description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', completed: true },
    { id: '4', title: 'Portfolio app router', description: 'Create portfolio website with Nextjs app router and publish on Vercel', completed: false },
  ]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};