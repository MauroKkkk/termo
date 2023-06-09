import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from "./components/Card"
export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e5c62',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
