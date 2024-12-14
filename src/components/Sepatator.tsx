import { View, StyleSheet } from 'react-native';

type SeparatorProps = {
  height?: number;
};

const Separator = ({ height = 10 }: SeparatorProps) => {
  return <View style={[styles.container, { height }]} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export { Separator };
