import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from '../components/Button';

import { RootStackParamList } from '../navigation';
import { TasksContext } from '~/Providers';
import { Task } from '~/types';

type EditTaskScreenRouteProp = RouteProp<RootStackParamList, 'EditTask'>;

const EditTaskScreen = () => {
  const router = useRoute<EditTaskScreenRouteProp>();
  const navigation = useNavigation();
  const { task, editMode } = router.params;

  const tasksContext = useContext(TasksContext);

  const [taskText, setTaskText] = useState(task?.todo || '');
  const tasks = tasksContext?.tasks || [];

  const onCreatePress = () => {
    const lastTask = tasks.at(-1);
    const id = lastTask ? lastTask.id + 1 : 1;

    tasksContext?.setTasks([...tasks, { id, userId: 1, todo: taskText, completed: false }]);
    navigation.goBack();
  };

  const onEditPress = () => {
    const filteredTasks = tasks.filter((item) => item.id !== task?.id);
    const updatedTask = {
      id: task!.id,
      todo: taskText,
      completed: task!.completed,
      userId: task!.userId,
    };
    const updatedTasks: Task[] = [...filteredTasks, updatedTask];

    tasksContext?.setTasks(updatedTasks);
    navigation.goBack();
  };

  const onDeletePress = () => {
    const filteredTasks = tasks.filter((item) => item.id !== task?.id);
    const updatedTasks: Task[] = [...filteredTasks];

    tasksContext?.setTasks(updatedTasks);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={taskText}
        onChangeText={setTaskText}
        multiline
        style={styles.input}
        autoComplete="off"
        autoCapitalize="sentences"
      />
      <View style={styles.gap} />
      <Button
        title="Save"
        onPress={editMode ? onEditPress : onCreatePress}
        disabled={taskText.length === 0}
      />
      {editMode && <Button title="Delete" onPress={onDeletePress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
  },
  gap: {
    flex: 1,
  },
});

export { EditTaskScreen };
