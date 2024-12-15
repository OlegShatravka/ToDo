import { useContext } from 'react';

import { TasksContext } from '~/Providers';
import { Task } from '~/types';

const USER_ID = 1;
const DEFAULT_TASK_ID = 1;

const useTasks = () => {
  const tasksContext = useContext(TasksContext);

  const tasks = tasksContext?.tasks || [];
  const setTasks = tasksContext!.setTasks;

  const createTask = (text: string) => {
    const latest = tasks.at(-1);
    const id = latest ? latest.id + 1 : DEFAULT_TASK_ID;

    setTasks([...tasks, { id, userId: USER_ID, todo: text, completed: false }]);
  };

  const editTask = (id: number, text: string) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        todo: text,
      };
    });

    setTasks(updatedTasks);
  };

  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        completed: true,
      };
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    const updatedTasks: Task[] = [...filteredTasks];

    setTasks(updatedTasks);
  };

  return {
    tasks,
    createTask,
    editTask,
    deleteTask,
    completeTask,
  };
};

export { useTasks };
