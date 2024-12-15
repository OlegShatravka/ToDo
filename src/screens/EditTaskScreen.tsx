import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';

import { TasksContext } from '~/Providers';
import { Separator } from '~/components';
import { DeleteButton } from '~/components/DeleteButton';
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

  const onCompleteTask = () => {
    const updatedTasks = tasks.map((item) => {
      if (item.id !== task!.id) {
        return item;
      }

      return {
        id: task!.id,
        todo: task!.todo,
        completed: true,
        userId: task!.userId,
      };
    });

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
      <Text style={styles.title}>Task descriprion</Text>
      <Separator />
      <TextInput
        value={taskText}
        onChangeText={setTaskText}
        multiline
        style={styles.input}
        autoComplete="off"
        autoCapitalize="sentences"
        placeholder="Describe what you need to do"
        autoFocus={!editMode}
        editable={!task?.completed}
      />

      {!task?.completed && (
        <>
          <Separator />
          {task?.todo && (
            <Button
              title="Complete task"
              onPress={onCompleteTask}
              disabled={taskText.length === 0}
              style={{ backgroundColor: 'green', width: '50%', alignSelf: 'flex-end' }}
            />
          )}
          <View style={styles.gap} />
          <View style={styles.buttonsContainer}>
            {editMode && <DeleteButton onPress={onDeletePress} />}
            <Button
              title="Save"
              onPress={editMode ? onEditPress : onCreatePress}
              disabled={taskText.length === 0}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: 'semibold',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    fontSize: 16,
    padding: 10,
    minHeight: 60,
  },
  gap: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export { EditTaskScreen };
