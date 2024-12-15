import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';

import { EditTaskScreen, TaskList } from '../screens';

import { Providers } from '~/Providers';
import { Screens } from '~/constants/screens';
import { Task } from '~/types';

export type RootStackParamList = {
  TaskList: undefined;
  TaskDetails: { task: Task };
  EditTask: { task?: Task; editMode: boolean };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Providers>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName={Screens.TaskList}>
            <Stack.Screen
              name={Screens.TaskList}
              component={TaskList}
              options={() => ({
                title: 'To Do List',
              })}
            />
            <Stack.Screen
              name={Screens.EditTask}
              component={EditTaskScreen}
              options={() => ({
                title: 'Details',
              })}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </Providers>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
