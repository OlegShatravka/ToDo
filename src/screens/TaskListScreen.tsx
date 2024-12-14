import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';

import { TasksContext } from '~/Providers';
import { TaskItem, Separator } from '~/components';
import { Task } from '~/types';

type TaskListScreenNavigationProps = StackNavigationProp<RootStackParamList, 'TaskList'>;

const TaskList = () => {
  const navigation = useNavigation<TaskListScreenNavigationProps>();
  const tasksContext = useContext(TasksContext);
  const tasks = tasksContext?.tasks || [];

  const onTaskPress = (task: Task) => {
    navigation.navigate('EditTask', {
      task,
      editMode: true,
    });
  };

  const onAddTaskPress = () => {
    navigation.navigate('EditTask', { editMode: false });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem data={item} onPress={onTaskPress} />}
        ItemSeparatorComponent={() => <Separator />}
      />
      {/* <Button
        onPress={() => {
         tasksContext?.setTasks([...tasks, { id: 1, userId: 1, todo: 'Test todo', completed: false}])
        }
      }
        title="Add task"
      /> */}
      <Button onPress={onAddTaskPress} title="Add task" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export { TaskList };
