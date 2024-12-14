import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';

import { BackButton } from '../components/BackButton';
import { EditTaskScreen, TaskList } from '../screens';
import { Providers } from '~/Providers';
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
          <Stack.Navigator initialRouteName="TaskList">
            <Stack.Screen name="TaskList" component={TaskList} />
            <Stack.Screen
              name="EditTask"
              component={EditTaskScreen}
              options={({ navigation }) => ({
                headerLeft: () => <BackButton onPress={navigation.goBack} />,
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
