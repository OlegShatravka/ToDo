import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

import { Gap } from './Gap';

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
        <Text style={styles.text}>{todo}</Text>
        <Gap />
        {completed && <Text style={{ fontSize: 25 }}>👌</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    borderRadius: 9,
    padding: 16,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 1,
          width: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  text: {
    fontSize: 16,
  },
});

export { TaskItem };
