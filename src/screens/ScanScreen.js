import { StyleSheet, View, Text, Image } from 'react-native';

export default function ScanScreen({ route }) {
  const imageUri = route.params?.imageUri;

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      ) : (
        <Text style={styles.text}>Geen foto geselecteerd</Text>
      )}
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
  image: {
    width: '90%',
    height: '80%',
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    color: '#999',
  },
});
