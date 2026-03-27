import { StyleSheet, View, Text } from 'react-native';

export default function BonnetjesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonnetjes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#999',
  },
});
