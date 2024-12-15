import { GestureResponderEvent } from 'react-native';

import { Button } from './Button';

type DeleteButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return <Button onPress={onPress} title="Delete" style={{ backgroundColor: 'red' }} />;
};

export { DeleteButton };
