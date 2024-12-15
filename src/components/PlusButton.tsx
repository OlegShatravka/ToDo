import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const PlusButton = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { bottom: height * 0.05, right: width * 0.05 }]}>
      <Text style={styles.text}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'lightblue',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 4,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});

export { PlusButton };
