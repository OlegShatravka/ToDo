import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title?: string;
  hidden: boolean;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, hidden, ...touchableProps }, ref) => {
  const { disabled } = touchableProps;

  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      disabled={hidden}
      style={[
        styles.button,
        touchableProps.style,
        disabled && !hidden && styles.disabled,
        hidden && styles.hidden,
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
    borderRadius: 24,
    minWidth: '25%',
    paddingVertical: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  hidden: {
    opacity: 0,
  },
});
