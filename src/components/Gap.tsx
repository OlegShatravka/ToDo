import { View, StyleSheet } from 'react-native';

type GapProps = {
  flex?: number;
};

const Gap = ({ flex = 1 }: GapProps) => {
  return <View style={[styles.container, { flex }]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { Gap };
