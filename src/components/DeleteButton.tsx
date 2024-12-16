import { GestureResponderEvent, StyleSheet } from 'react-native';

import { Button } from './Button';

type DeleteButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  hidden: boolean;
};

const DeleteButton = ({ onPress, hidden }: DeleteButtonProps) => {
  return <Button onPress={onPress} title="Delete" style={styles.button} hidden={hidden} />;
};

const styles = StyleSheet.create({
  button: { backgroundColor: 'red' },
});

export { DeleteButton };
