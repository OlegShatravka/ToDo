import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';

import { RootStackParamList } from '../navigation';

import { TaskItem, Separator, PlusButton } from '~/components';
import { Screens } from '~/constants/screens';
import { useTasks } from '~/hooks/useTasks';
import { Task } from '~/types';

type TaskListScreenNavigationProps = StackNavigationProp<RootStackParamList, 'TaskList'>;

const TaskList = () => {
  const navigation = useNavigation<TaskListScreenNavigationProps>();
  const { tasks } = useTasks();

  const onTaskPress = (task: Task) => {
    navigation.navigate(Screens.EditTask, {
      task,
      editMode: true,
    });
  };

  const onAddTaskPress = () => {
    navigation.navigate(Screens.EditTask, { editMode: false });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem data={item} onPress={onTaskPress} />}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={styles.contentContainer}
      />
      <Pressable onPress={onAddTaskPress}>
        <PlusButton />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingVertical: 10,
  },
});

export { TaskList };
