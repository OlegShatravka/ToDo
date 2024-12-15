import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';

import { Separator } from '~/components';
import { DeleteButton } from '~/components/DeleteButton';
import { useTasks } from '~/hooks/useTasks';

type EditTaskScreenRouteProp = RouteProp<RootStackParamList, 'EditTask'>;

const EditTaskScreen = () => {
  const router = useRoute<EditTaskScreenRouteProp>();
  const navigation = useNavigation();
  const { task, editMode } = router.params;

  const [taskText, setTaskText] = useState(task?.todo || '');
  const { createTask, editTask, deleteTask, completeTask } = useTasks();

  const onCreatePress = () => {
    createTask(taskText);
    navigation.goBack();
  };

  const onEditPress = () => {
    editTask(task!.id, taskText);
    navigation.goBack();
  };

  const onCompleteTask = () => {
    completeTask(task!.id);
    navigation.goBack();
  };

  const onDeletePress = () => {
    deleteTask(task!.id);
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
