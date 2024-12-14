import React, { createContext, useState } from 'react';
import { Task } from './types';

type TaskContextType = {
  tasks: Task[] | null;
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>;
} | null;

const TasksContext = createContext<TaskContextType>(null);

function Providers({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
}

export { Providers, TasksContext };
