import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Task } from '~/types';

type TaskItemProps = {
  data: Task;
  onPress: Function;
};

const TaskItem = ({ data, onPress }: TaskItemProps) => {
  const { id, todo, completed } = data;
  const onItemPress = () => {
    onPress(data);
  };

  return (
    <Pressable onPress={onItemPress}>
      <View key={id} style={styles.container}>
        <Text>{id}</Text>
        <Text style={styles.text}>{todo}</Text>
        <Text>{completed}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export { TaskItem };
