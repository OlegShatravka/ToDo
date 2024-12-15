import * as SecureStore from 'expo-secure-store';
import React, { createContext, useState, useEffect } from 'react';

import { STORAGE_KEY } from './constants/storage';
import { Task } from './types';

type TaskContextType = {
  tasks: Task[] | null;
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>;
} | null;

const TasksContext = createContext<TaskContextType>(null);

function Providers({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await SecureStore.getItemAsync(STORAGE_KEY);
        if (savedTasks !== null) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks:', error);
      }
    };

    if (tasks !== null) {
      saveTasks();
    }
  }, [tasks]);

  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
}

export { Providers, TasksContext };
