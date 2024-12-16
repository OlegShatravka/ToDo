import { GestureResponderEvent } from 'react-native';

import { Button } from './Button';

type SaveButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  disabled: boolean;
  hidden: boolean;
};

const SaveButton = ({ onPress, disabled, hidden }: SaveButtonProps) => {
  return <Button title="Save" onPress={onPress} disabled={disabled} hidden={hidden} />;
};

export { SaveButton };
