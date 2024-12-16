import { GestureResponderEvent, StyleSheet } from 'react-native';

import { Button } from './Button';

type CompleteButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  hidden: boolean;
};

const CompleteButton = ({ onPress, hidden }: CompleteButtonProps) => {
  return <Button title="Complete" onPress={onPress} style={styles.button} hidden={hidden} />;
};

const styles = StyleSheet.create({
  button: { backgroundColor: 'green', minWidth: '30%' },
});

export { CompleteButton };
